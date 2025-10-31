import type { NavigationProp, RouteProp } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import IMP from 'iamport-react-native';
import type React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loading from '../Loading';
import type { RootStackParamList } from '../types/navigation';
import { getUserCode } from '../utils';

const PaymentStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

const Payment: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Payment'>>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const params = route.params.params;
  const tierCode = route.params.tierCode;
  const userCode = getUserCode(params.pg, tierCode);

  return (
    <SafeAreaView style={PaymentStyles.container}>
      <IMP.Payment
        userCode={userCode}
        tierCode={tierCode}
        loading={<Loading />}
        data={params}
        callback={(response) => navigation.navigate('PaymentResult', response)}
      />
    </SafeAreaView>
  );
};

export default Payment;
