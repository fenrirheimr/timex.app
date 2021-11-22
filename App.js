import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from './src/navigators/rootNavigator';

const NavStack = ({ navigation }) => RootNavigator({ navigation })
const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <NavStack navigation={navigation} />
    </NavigationContainer>
  );
}
export default App;
