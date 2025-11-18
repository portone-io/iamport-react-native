import { SafeAreaProvider } from 'react-native-safe-area-context';
import { IamportNavigation } from './NavigationService';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { enableScreens } from 'react-native-screens';

enableScreens(true);

function App() {
  return (
    <GluestackUIProvider config={config}>
      <SafeAreaProvider>
        {/* <Text>Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World</Text> */}
        <IamportNavigation />
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}

export default App;
