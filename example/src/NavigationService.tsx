import { createStaticNavigation } from '@react-navigation/native';
import Home from './Home';
import Certification from './Certification';
import CertificationTest from './CertificationTest';
import CertificationResult from './CertificationResult';
import Payment from './Payment';
import PaymentTest from './PaymentTest';
import PaymentResult from './PaymentResult';
import type { IMPData } from 'iamport-react-native';
import { createStackNavigator } from '@react-navigation/stack';

export interface CertificationParams {
  params: IMPData.CertificationData;
  userCode: string;
  tierCode?: string;
}

export interface PaymentParams {
  params: IMPData.PaymentData;
  userCode: string;
  tierCode?: string;
}

export type RootStackParamList = {
  Home: undefined;
  Certification: CertificationParams | undefined;
  CertificationTest: undefined;
  CertificationResult: any;
  Payment: PaymentParams | undefined;
  PaymentTest: undefined;
  PaymentResult: any;
};

const RootStack = createStackNavigator<RootStackParamList>({
  id: undefined,
  initialRouteName: 'Home',
  screens: {
    Home: {
      options: {
        headerShown: false,
      },
      screen: Home,
    },
    Certification: {
      options: {
        headerShown: false,
      },
      screen: Certification,
    },
    CertificationTest: {
      options: {
        headerTitle: '아임포트 본인인증 테스트',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#344e81',
        },
        headerTitleStyle: {
          color: '#fff',
        },
        headerTintColor: '#fff',
        headerBackTitle: ' ',
      },
      screen: CertificationTest,
    },
    CertificationResult: {
      options: {
        headerTitle: '아임포트 본인인증 결과',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#344e81',
        },
        headerTitleStyle: {
          color: '#fff',
        },
        headerLeft: () => null,
      },
      screen: CertificationResult,
    },
    Payment: {
      options: {
        headerShown: false,
      },
      screen: Payment,
    },
    PaymentTest: {
      options: {
        headerTitle: '아임포트 결제 테스트',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#344e81',
        },
        headerTitleStyle: {
          color: '#fff',
        },
        headerTintColor: '#fff',
        headerBackTitle: ' ',
      },
      screen: PaymentTest,
    },
    PaymentResult: {
      options: {
        headerTitle: '아임포트 결제 결과',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#344e81',
        },
        headerTitleStyle: {
          color: '#fff',
        },
        headerLeft: () => null,
      },
      screen: PaymentResult,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

function IamportNavigation() {
  return <Navigation />;
}

export { RootStack, IamportNavigation };
