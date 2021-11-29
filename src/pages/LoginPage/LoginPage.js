import React from 'react'
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native'
import TouchID from 'react-native-touch-id'

import styles from './LoginPageStyles.scss'

import { TimexLogo, TxInput, TxButton } from '../../components/index'

const optionalConfigObject = {
  title: "Authentication Required", // Android
  color: "ffffff", // Android
//   fallbackLabel: "Show Passcode" // iOS (if empty, then label is hidden)
}

export default class LoginPage extends React.Component {
	  
	auth = () => {
		  TouchID.authenticate("Authenticate", optionalConfigObject)
				  .then(success => {
					Alert.alert('Authenticated Successfully');
				  })
				  .catch(error => {
					Alert.alert('Authentication Failed', error.toString());
				  });
	  }
	  
	checkTouchId = () => {
		TouchID.isSupported()
				.then(biometryType => {
					// Success code
					if (biometryType === 'FaceID') {
						console.log('FaceID is supported.');
						this.auth()
					} else if (biometryType === 'TouchID') {
						console.log('TouchID is supported.');
						this.auth()
					} else if (biometryType === true) {
						console.log('Touch ID is supported on Android');
						this.auth()
					}
				})
				.catch(error => {
					// Failure code
					Alert.alert(`Authentication Failed ${error}`);
					console.log(error);
				});
	
	}
	login () {
		console.log('login');
	}

	render () {
        return (
			<ScrollView>
				<View style={styles.container}>
					<TimexLogo />
					<TxInput title='E-mail' />
					<TxInput title='Password' secure={true} />
					<View>
						<TxButton title="Login" onPress={() => this.login()} />
						<TxButton title="Camera" onPress={() => this.props.navigation.navigate('CameraPage')} />
						<TxButton title="Authenticate with touchId/faceId" onPress={this.checkTouchId.bind(this)} />
					</View>
					<View style={styles.actions}>
						<TouchableOpacity>
							<Text style={styles.recover}>Recover password</Text>
						</TouchableOpacity>
						<View style={styles.question}>
							<Text>Don’t have account?</Text>
							<TouchableOpacity>
								<Text style={styles.signup}>Sign Up</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
        )
    }
}
