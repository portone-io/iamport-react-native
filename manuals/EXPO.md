# Expo에서 아임포트 연동하기

`iamport-react-native`는 Expo 환경에서 사용하실 수 있습니다.

## 1. CNG 프로젝트

CNG(Continuous Native Generation)는 Expo에서 네이티브 프로젝트를 쉽게 관리하기
위해 도입한 개념으로, 한번 생성된 플랫폼별 네이티브 코드를 계속 유지하는 대신,
필요할 때 마다 prebuild로 네이티브 코드를 생성하는 방식입니다. `ios`및 `android`
폴더가 매번 자동으로 생성되기 때문에 필요한 설정들은 `app.json`에 적어주셔야
합니다.

### 1-1. Expo 빌드를 위한 설정

```sh
npx expo prebuild
```

- `name`, `icon`, `version`, 그리고 `slug`는 앱 공통 설정으로 필수입니다.
- `ios`의 `bundleIdentifier` 및 `buildNumber`는 iOS 앱 배포 및 빌드를 위해
  필수입니다.
- `android`의 `package` 및 `versionCode`는 안드로이드 앱 배포 및 빌드를 위해
  필수입니다.

```json
// app.json
{
  "expo": {
    "name": "Your App Name",
    "icon": "./path/to/your/app-icon.png",
    "version": "1.0.0",
    "slug": "your-app-slug",
    "ios": {
      "bundleIdentifier": "com.yourcompany.yourappname",
      "buildNumber": "1"
    },
    "android": {
      "package": "com.yourcompany.yourappname",
      "versionCode": 1
    }
  }
}
```

### 1-2. 외부 앱 실행을 위한 설정

일반 리액트 네이티브 프로젝트의 경우 AndroidManifest.xml 및 Info.plist에 앱
scheme [관련 설정](./SETTING.md)을 작성하지만, expo 프로젝트의 경우 네이티브
코드가 자동 생성되므로 app.json에 대신 설정을 적어주셔야 합니다.

먼저 안드로이드를 위한 외부 앱 설정에 필요한 expo-build-properties를 설치합니다.

```sh
npx expo install expo-build-properties
```

- `ios.infoPlist.LSApplicationQueriesSchemes`에는 외부 앱 리스트를 작성합니다.
- `ios.infoPlist.NSAppTransportSecurity`의 두 항목을 `YES`로 설정합니다.
- `android.intentFilters`에 개발하시는 앱의 scheme을 설정합니다.
- `plugins`에 expo-build-properties를 이용해 안드로이드 외부 앱 리스트를 추가로
  작성합니다.

```json
// app.json
{
  "expo": {
    ...,
    "ios": {
      ...
      "infoPlist": {
        "LSApplicationQueriesSchemes": [
          "kftc-bankpay",
          "ispmobile",
          "itms-apps",
          "hdcardappcardansimclick",
          "smhyundaiansimclick",
          "shinhan-sr-ansimclick",
          "smshinhanansimclick",
          "kb-acp",
          "mpocket.online.ansimclick",
          "ansimclickscard",
          "ansimclickipcollect",
          "vguardstart",
          "samsungpay",
          "scardcertiapp",
          "lottesmartpay",
          "lotteappcard",
          "cloudpay",
          "nhappcardansimclick",
          "nonghyupcardansimclick",
          "citispay",
          "citicardappkr",
          "citimobileapp",
          "kakaotalk",
          "payco",
          "lpayapp",
          "hanamopmoasign",
          "wooripay",
          "nhallonepayansimclick",
          "hanawalletmembers",
          "chaipayment",
          "kb-auth",
          "hyundaicardappcardid",
          "com.wooricard.wcard",
          "lmslpay",
          "lguthepay-xpay",
          "liivbank",
          "supertoss",
          "newsmartpib",
          "ukbanksmartbanknonloginpay",
          "kakaobank",
          "naversearchthirdlogin"
        ],
        "NSAppTransportSecurity": {
          "NSAllowsArbitraryLoads": true,
          "NSAllowsArbitraryLoadsInWebContent": true
        }
      }
    },
    ...
    "android": {
      ...
      "intentFilters": [
        {
          "action": "VIEW",
          "category": [
            "DEFAULT",
            "BROWSABLE"
          ],
          "data": {
            "scheme": "exampleformanagedexpo"
          }
        }
      ]
    },
    ...
    "plugins": [
      [
        "expo-build-properties",
        {
          "android": {
            "manifestQueries": {
              "intent": [
                {
                  "action": "android.intent.action.VIEW",
                  "category": ["android.intent.category.BROWSABLE"],
                  "data": {
                    "scheme": "https"
                  }
                }
              ],
              "package": [
                "kvp.jjy.MispAndroid320",
                "com.kftc.bankpay.android",
                "com.kbstar.liivbank",
                "com.nh.cashcardapp",
                "kr.co.kfcc.mobilebank",
                "com.knb.psb",
                "com.kakao.talk",
                "com.mysmilepay.app",
                "finance.chai.app",
                "com.nhnent.payapp",
                "com.hyundaicard.appcard",
                "viva.republica.toss",
                "com.shcard.smartpay",
                "com.shinhan.smartcaremgr",
                "com.hanaskard.paycla",
                "kr.co.samsungcard.mpocket",
                "com.kbcard.cxh.appcard",
                "nh.smart.nhallonepay",
                "kr.co.citibank.citimobile",
                "com.lcacApp",
                "com.lotte.lpay",
                "com.ssg.serviceapp.android.egiftcertificate",
                "com.inicis.kpay",
                "com.kbankwith.smartbank",
                "com.lguplus.paynow",
                "com.wooricard.smartapp",
                "com.lottemembers.android",
                "com.kt.ktauth",
                "com.lguplus.smartotp",
                "com.sktelecom.tauth",
                "com.wooribank.smart.npib",
                "com.kakaobank.channel",
                "com.shinhan.sbanking"
              ]
            }
          }
        }
      ]
    ]
  }
}
```

### 예제

- [예제 코드 작성하기](./EXAMPLE.md)
- [예제 프로젝트 실행하기](../example/README.md)
