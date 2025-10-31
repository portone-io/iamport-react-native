import { Text, View } from 'native-base';
import type React from 'react';

const Loading: React.FC = () => {
  return (
    <View flex={1} alignItems={'center'} justifyContent={'center'}>
      <Text fontSize={20}>잠시만 기다려주세요...</Text>
    </View>
  );
};

export default Loading;
