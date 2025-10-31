import type { NavigationProp, RouteProp } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import IMP from 'iamport-react-native';
import type React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loading from '../Loading';
import type { RootStackParamList } from '../types/navigation';
import { getUserCode } from '../utils';

const Certification: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Certification'>>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const params = route.params.params;
  const tierCode = route.params.tierCode;
  const userCode = getUserCode('danal', tierCode || '', 'certification');

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <IMP.Certification
        userCode={userCode}
        tierCode={tierCode}
        data={params}
        loading={<Loading />}
        callback={(response) =>
          navigation.navigate('CertificationResult', response)
        }
      />
    </SafeAreaView>
  );
};

export default Certification;
