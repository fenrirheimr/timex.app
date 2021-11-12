import React from 'react';
import {
	Text,
	Center,
	NativeBaseProvider,
	VStack,
} from 'native-base';
import { RNCamera } from 'react-native-camera'

const CameraPage = ({ navigation, props }) => {
	return (
		<NativeBaseProvider>
			<Center
				_dark={{bg: '#000'}}
				_light={{bg: '#fff'}}
				px={4}
				flex={1}>
				<VStack space={5} alignItems="center">
					<Text>sdfsdfsdf</Text>
					<RNCamera
						style={{ flex: 1, alignItems: 'center' }}
						ref={ref => {
							this.camera = ref
						}}
					/>
				</VStack>
			</Center>
		</NativeBaseProvider>
	);
};
export default CameraPage;


// import * as React from 'react';
// import {
// 	Link,
// 	Text,
// 	HStack,
// 	Center,
// 	Heading,
// 	Switch,
// 	useColorMode,
// 	NativeBaseProvider,
// 	VStack,
// 	Code,
// 	Button, View
// } from 'native-base';
// import { RNCamera } from 'react-native-camera';
//
// const CameraPage = ({ navigation }) => {
// 	async function takePicture() {
// 		try {
// 			const data = await this.camera.takePictureAsync();
// 			console.log('Path to image: ' + data.uri);
// 		} catch (err) {
// 			// console.log('err: ', err);
// 		}
// 	}
// 	return (
// 		<NativeBaseProvider>
// 			<View>
// 				<RNCamera
// 					ref={cam => {
// 						this.camera = cam;
// 					}}
// 				>
// 					<View>
// 						<TouchableOpacity onPress={this.takePicture}>
// 							<Icon style={styles.iconCamera}>camera</Icon>
// 							<Text>Take Photo</Text>
// 						</TouchableOpacity>
// 					</View>
// 				</RNCamera>
// 			</View>
// 		</NativeBaseProvider>
// 	);
// }
// export default CameraPage;
