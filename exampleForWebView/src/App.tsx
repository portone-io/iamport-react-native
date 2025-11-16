import { createStaticNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Certification from './Certification';
import Payment from './Payment';

interface HomeParams {
  type: string;
  response: any;
}

interface MessageParams {
  userCode: string;
  data: any;
}

export type RootStackParamList = {
  Home: HomeParams | undefined;
  Certification: MessageParams | undefined;
  Payment: MessageParams | undefined;
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
    Payment: {
      options: {
        headerShown: false,
      },
      screen: Payment,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

function App() {
  return <Navigation />;
}

export default App;
