import React from 'react';
import {
	Text,
	NativeBaseProvider
} from 'native-base';
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { RNCamera } from 'react-native-camera';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'black'
	},
	containerTitle: {
		width: '100%',
		textAlign: 'center',
		color: '#FFF'
	},
	scanner: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	captureWrap: {
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	capture: {
		flex: 0,
		backgroundColor: '#fff',
		borderRadius: 5,
		padding: 15,
		paddingHorizontal: 20,
		alignSelf: 'center',
		margin: 20,
	  },
	barcodeFragment: {
		borderWidth: 2,
		borderRadius: 10,
		position: 'absolute',
		borderColor: '#F00',
		justifyContent: 'center',
		backgroundColor: 'rgba(255, 255, 255, 0.9)',
		padding: 10,
	},
	barcodeText: {
		color: '#F00',
		flex: 1,
		position: 'absolute',
		textAlign: 'center',
		backgroundColor: 'transparent',
	}
  })

  state = {
	barcodes: []
  }
  
  barcodeRecognized = (scanResult) => {
    if (scanResult.data != null) {
		if (this.state.barcodes.includes(scanResult.data)) {
			return
		} else {
			console.warn(scanResult.data);
			this.state.barcodes.push(scanResult.data);
		}
    }
    return;
  }

  renderBarcodes = () => (
    <View>
      {this.state.barcodes.map(this.renderBarcode)}
    </View>
  );
  
  renderBarcode = ({ bounds, data }) => (
    <React.Fragment key={data + bounds.origin.x}>
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
  );
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.warn(data.uri);
    }
  };

const CameraPage = ({ navigation, props }) => {
	return (
		<NativeBaseProvider>
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
				<View style={styles.captureWrap}>
					<TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
						<Text style={{ fontSize: 14 }}> SNAP </Text>
					</TouchableOpacity>
				</View>
			</View>
		</NativeBaseProvider>
	);
};
export default CameraPage;
