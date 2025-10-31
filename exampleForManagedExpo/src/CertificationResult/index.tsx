import { FontAwesome } from '@expo/vector-icons';
import type { NavigationProp, RouteProp } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Icon, IconButton, List, Text } from 'native-base';
import type React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { RootStackParamList } from '../types/navigation';

const CertificationResult: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'CertificationResult'>>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const success = route.params.success;
  const imp_uid = route.params.imp_uid;
  const merchant_uid = route.params.merchant_uid;
  const error_msg = route.params?.error_msg;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        margin: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
      }}
    >
      {success ? (
        <Icon
          as={FontAwesome}
          name={'check-circle'}
          size={20}
          color={'#52c41a'}
        />
      ) : (
        <Icon as={FontAwesome} name={'warning'} size={20} color={'#f5222d'} />
      )}
      <Text fontSize={25} fontWeight={'bold'} mb={20}>{`본인인증에 ${
        success ? '성공' : '실패'
      }하였습니다`}</Text>
      <List width={'90%'} mb={50} borderRadius={3}>
        <List.Item>
          <Text w={'40%'}>아임포트 번호</Text>
          <Text w={'60%'}>{imp_uid}</Text>
        </List.Item>
        {success ? (
          <List.Item>
            <Text w={'40%'}>주문번호</Text>
            <Text w={'60%'}>{merchant_uid}</Text>
          </List.Item>
        ) : (
          <List.Item>
            <Text w={'40%'}>에러메시지</Text>
            <Text w={'60%'}>{error_msg}</Text>
          </List.Item>
        )}
      </List>
      <IconButton
        icon={<Icon as={FontAwesome} name={'arrow-left'} size={20} />}
        onPress={() => navigation.navigate('Home')}
      >
        <Text>돌아가기</Text>
      </IconButton>
    </SafeAreaView>
  );
};

export default CertificationResult;
