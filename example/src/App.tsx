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
        <IamportNavigation />
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}

export default App;
