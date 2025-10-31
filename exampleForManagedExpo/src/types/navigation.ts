import type { IMPData } from 'iamport-react-native';

export type RootStackParamList = {
  Home: undefined;
  PaymentTest: undefined;
  Payment: {
    params: IMPData.PaymentData;
    tierCode?: string;
  };
  PaymentResult: {
    imp_success?: boolean | string;
    success?: boolean | string;
    imp_uid?: string;
    txId?: string;
    merchant_uid?: string;
    paymentId?: string;
    error_code?: string;
    code?: string;
    message?: string;
    error_msg?: string;
  };
  CertificationTest: undefined;
  Certification: {
    params: {
      merchant_uid: string;
      company: string;
      carrier: string;
      name: string;
      phone: string;
      min_age: string;
    };
    tierCode?: string;
  };
  CertificationResult: {
    success: boolean;
    imp_uid: string;
    merchant_uid: string;
    error_msg?: string;
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}