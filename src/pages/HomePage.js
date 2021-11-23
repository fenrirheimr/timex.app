import React from 'react';
import {
	Link,
	Text,
	HStack,
	Center,
	Heading,
	Switch,
	useColorMode,
	NativeBaseProvider,
	VStack,
	Button
} from 'native-base';

import TimexLogo from '../components/TimexLogo';

// Color Switch Component
function ToggleDarkMode() {
	const {colorMode, toggleColorMode} = useColorMode();
	return (
		<HStack space={2} alignItems="center">
			<Text>Dark</Text>
			<Switch
				isChecked={colorMode === 'light'}
				onToggle={toggleColorMode}
				aria-label={
					colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
				}
			/>
			<Text>Light</Text>
		</HStack>
	);
}

const HomePage = ({ navigation, props }) => {
	return (
		<NativeBaseProvider>
			<Center
				_dark={{bg: '#000'}}
				_light={{bg: '#fff'}}
				px={4}
				flex={1}>
				<VStack space={5} alignItems="center">
					<Heading size="lg">Welcome to hell</Heading>
					<TimexLogo />
					<HStack space={2} alignItems="center">
						<Button size="lg" onPress={() => navigation.navigate('LoginPage')}>Login</Button>
						<Button size="lg" onPress={() => navigation.navigate('SignupPage')}>Sign Up</Button>
						<Button size="lg" onPress={() => navigation.navigate('CameraPage')}>Camera</Button>
					</HStack>

					<Link mt={4} href="https://nativebase.io">
						Click here to open documentation.
					</Link>
					<ToggleDarkMode />
				</VStack>
			</Center>
		</NativeBaseProvider>
	);
};
export default HomePage;
