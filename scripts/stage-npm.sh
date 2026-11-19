#!/usr/bin/env bash
set -euo pipefail

package=iamport-react-native
version=$(jq -er '.version' packages/iamport-react-native/package.json)
stage_result="$RUNNER_TEMP/iamport-react-native-npm-stage.json"
rm -f "$stage_result"

# Only stable releases go through this workflow.
if [[ ! $version =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "Skipping prerelease $package@$version"
  exit 0
fi

# Stage only on the push that changes the package version. A repeat push
# while the version awaits 2FA must not submit a second staging attempt.
# If staging actually failed or was rejected, verify it is no longer pending
# in npm before re-running the original version-bump workflow.
before=${RELEASE_BEFORE_SHA:?}
[[ $before =~ ^[0-9a-f]{40}$ ]]
if [[ $before != 0000000000000000000000000000000000000000 ]]; then
  git cat-file -e "$before^{commit}" 2>/dev/null || git fetch --no-tags --depth=1 origin "$before"
  previous_version=$(git show "$before:packages/iamport-react-native/package.json" | jq -er '.version')
  if [[ $previous_version == "$version" ]]; then
    echo "No new stable version in this push"
    exit 0
  fi
fi

registry=https://registry.npmjs.org
versions=$(npm view "$package" versions --json --registry="$registry")
if jq -e --arg version "$version" 'index($version) != null' <<< "$versions" > /dev/null; then
  echo "$package@$version is already published"
  exit 0
fi

scratch=$(mktemp -d)
trap 'rm -rf "$scratch"' EXIT
pnpm --dir packages/iamport-react-native pack --pack-destination "$scratch"
tarballs=("$scratch"/*.tgz)
[[ ${#tarballs[@]} == 1 && -f ${tarballs[0]} ]]
# Use the repository-pinned pnpm to build the tarball, and a separate pinned
# npm CLI for the staging endpoint.
npm exec --registry="$registry" --yes --package=npm@12.2.3 -- npm stage publish "${tarballs[0]}" \
  --registry="$registry" --access=public --provenance --json > "$scratch/stage.json"
jq -e --arg package "$package" --arg version "$version" \
  '.[$package] | select(.version == $version and (.stageId | type == "string" and length > 0))' \
  "$scratch/stage.json" > "$stage_result"
