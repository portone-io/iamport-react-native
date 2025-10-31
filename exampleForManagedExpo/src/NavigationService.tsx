import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import type React from 'react';
import Certification from './Certification';
import CertificationResult from './CertificationResult';
import CertificationTest from './CertificationTest';
import Home from './Home';
import Payment from './Payment';
import PaymentResult from './PaymentResult';
import PaymentTest from './PaymentTest';
import type { RootStackParamList } from './types/navigation';

const RootStack = createStackNavigator<RootStackParamList>();

const IamportNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Home"
        // screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <RootStack.Screen
          options={{ headerShown: false }}
          name="Certification"
          component={Certification}
        />
        <RootStack.Screen
          options={{
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
          }}
          name="CertificationTest"
          component={CertificationTest}
        />
        <RootStack.Screen
          options={{
            headerTitle: '아임포트 본인인증 결과',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#344e81',
            },
            headerTitleStyle: {
              color: '#fff',
            },
            headerLeft: () => null,
          }}
          name="CertificationResult"
          component={CertificationResult}
        />
        <RootStack.Screen
          options={{ headerShown: false }}
          name="Payment"
          component={Payment}
        />
        <RootStack.Screen
          options={{
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
          }}
          name="PaymentTest"
          component={PaymentTest}
        />
        <RootStack.Screen
          options={{
            headerTitle: '아임포트 결제 결과',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#344e81',
            },
            headerTitleStyle: {
              color: '#fff',
            },
            headerTintColor: '#fff',
            headerLeft: () => null,
          }}
          name="PaymentResult"
          component={PaymentResult}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default IamportNavigation;
