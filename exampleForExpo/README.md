# exampleForExpo 프로젝트

`iamport-react-native` 예제입니다.

Expo를 통해 아임포트 결제모듈을 연동하는 것을 구현한 예제 프로젝트입니다.

Expo 관련 설정은 [Expo 설정하기](../manuals/EXPO.md)에서 보실 수 있습니다.

## Expo CLI 설치

```shell
$ pnpm i -g expo-cli
```

## Expo Go 앱에서 실행

먼저 테스트할 기기에 [Expo Go](https://expo.dev/client) 앱을 설치합니다.

`iamport-react-native` 레포를 clone받은 후 프로젝트의 `example` 폴더 안으로 이동합니다.
```shell
$ git clone https://github.com/iamport/iamport-react-native
$ cd iamport-react-native/exampleForExpo
```

Expo 개발 서버를 실행합니다.
```shell
$ expo start
```

서버의 로딩이 완료되면 안드로이드의 경우 Expo Go 앱에서, iOS의 경우 카메라를 통해 QR 코드를 찍어 앱을 실행합니다.

Expo Go 앱의 특성상 일부 결제수단(e.g. 뱅크페이)은 직접 빌드하는 것이 아니면 사용이 불가합니다.
