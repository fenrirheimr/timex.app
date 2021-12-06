import React from 'react'
import { View, TouchableOpacity, Text } from "react-native"
import { RNCamera } from 'react-native-camera'
import styles from './CameraPageStyles.scss'

export default class LoginPage extends React.Component {
	state = {
		barcodes: []
	}
	
	barcodeRecognized = (scanResult) => {
		if (scanResult.data != null) {
			if (this.state.barcodes.includes(scanResult.data)) {
				return
			} else {
				console.warn(scanResult.data)
				this.state.barcodes.push(scanResult.data)
			}
		}
		return
	}
	renderBarcodes = () => (
		<View>
			{this.state.barcodes.map(this.renderBarcode)}
		</View>
	)
	renderBarcode = ({ bounds, data }) => (
		<React.Fragment>
			<View
				style={{
					...style.barcodeFragment,
					...bounds.size,
					left: bounds.origin.x,
					top: bounds.origin.y,
				}}
			>
			<Text style={style.barcodeText}>{data}</Text>
			</View>
		</React.Fragment>
	)
	takePicture = async () => {
		if (this.camera) {
			const options = { quality: 0.5, base64: true }
			const data = await this.camera.takePictureAsync(options)
			console.warn(data.uri)
		}
	}
	render () {
		return (
			<React.Fragment>
				<View style={styles.container}>
					<Text style={styles.containerTitle}>Take a photo or scan QR</Text>
					<RNCamera
						ref={ref => {
							this.camera = ref
						}}
						style={styles.scanner}
						captureAudio={false}
						onBarCodeRead={this.barcodeRecognized.bind(this)}
						type={RNCamera.Constants.Type.back}
					>
						{this.renderBarcodes()}
					</RNCamera>
					<View>
						<TouchableOpacity style={styles.capture} onPress={this.takePicture.bind(this)}>
							<Text style={styles.snap}>SNAP</Text>
						</TouchableOpacity>
					</View>
				</View>
			</React.Fragment>
		)
	}
}
