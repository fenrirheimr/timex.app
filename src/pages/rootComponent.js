import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from '../navigators/rootNavigator';

const Root = () => {
	return (
		<NavigationContainer>
			<RootStack />
		</NavigationContainer>
	);
};
export default Root
