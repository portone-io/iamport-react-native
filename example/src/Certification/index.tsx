import IMP from 'iamport-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../NavigationService';
import Loading from '../Loading';
import { SafeAreaView } from 'react-native-safe-area-context';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Certification'>;
type RouteProps = RouteProp<RootStackParamList, 'Certification'>;

function Certification() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const params = route.params?.params!;
  const tierCode = route.params?.tierCode;
  const userCode = route.params?.userCode!;

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <IMP.Certification
        userCode={userCode}
        tierCode={tierCode}
        data={params}
        loading={<Loading />}
        callback={(response) =>
          navigation.replace('CertificationResult', response)
        }
      />
    </SafeAreaView>
  );
}

export default Certification;
