import { NativeBaseProvider } from 'native-base';
import type React from 'react';
import IamportNavigation from './NavigationService';

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <IamportNavigation />
    </NativeBaseProvider>
  );
};

export default App;
