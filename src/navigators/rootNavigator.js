import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import CameraPage from '../pages/CameraPage';

const Stack = createNativeStackNavigator();

const RootNavigator = ({ navigation }) => {
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
			/>
			<Stack.Screen
				name="SignupPage"
				navigation={navigation}
				component={SignupPage}
			/>
			<Stack.Screen
				name="CameraPage"
				navigation={navigation}
				component={CameraPage}
			/>
		</Stack.Navigator>
	);
}

export default RootNavigator;
