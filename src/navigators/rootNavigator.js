import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginPage, CameraPage } from '../pages/index';

const Stack = createNativeStackNavigator();

const RootNavigator = ({ navigation }) => {
	return (
		<Stack.Navigator initialRouteName="LoginPage">
			<Stack.Screen
				name="LoginPage"
				navigation={navigation}
				component={LoginPage}
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
