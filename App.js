import React from 'react';
// import {
//   NativeBaseProvider
// } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './src/pages/HomePage';
import LoginPage from './src/pages/LoginPage';
import SignupPage from './src/pages/SignupPage';
import CameraPage from './src/pages/CameraPage';

// import RootComponent from './src/pages/rootComponent';

const Stack = createNativeStackNavigator();

const NavStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen
        name="HomePage"
        navigation={navigation}
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LoginPage"
        navigation={navigation}
        component={LoginPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignupPage"
        navigation={navigation}
        component={SignupPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CameraPage"
        navigation={navigation}
        component={CameraPage}
      />
    </Stack.Navigator>
  );
}
const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <NavStack navigation={navigation} />
    </NavigationContainer>
  );
}
export default App;
