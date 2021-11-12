import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';

const Stack = createNativeStackNavigator();

const RootStack = () => {
	return (
		<Stack.Navigator initialRouteName="HomePage">
			<Stack.Screen
				name="HomePage"
				component={HomePage}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Login Page"
				component={LoginPage}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Signup Page"
				component={SignupPage}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}

export default RootStack;
