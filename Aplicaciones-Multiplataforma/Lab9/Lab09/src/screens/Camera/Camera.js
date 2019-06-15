import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {RNCamera} from 'react-native-camera';

const PendingView = () => (
    <View
        style={{
            flex: 1,
            backgroundColor: 'lightgreen',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
            <Text>Waiting</Text>
        </View>
);

class CameraScreen extends Component {
    render () {
        return (
            <View style={StyleSheet.container}>
                <RNCamera
                    style={StyleSheet.preview}
                    type={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We meed your permision to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel'
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'we meed your permission to use your audio',
                        buttonPositive: 'ok',
                        buttonNegative: 'Cancel'
                    }}
                >
                    {({ camera, status, recordAudioPermissionStatus }) => {
                        if (status !== 'READY') return <PendingView />;
                        return(
                            <View
                                style={{
                                    flex: 0,
                                    flexDirection: 'row',
                                    justifyContent: 'center'
                                }}
                                >
                                    <TouchableOpacity
                                        onPress={() => this.takePicture(camera)}
                                        style={StyleSheet.capture}
                                        >
                                            <Text style={{ fontSize: 14}}>SNAP</Text>
                                        </TouchableOpacity>
                                </View>
                        );
                    }}
                </RNCamera>
            </View>
        );
    }

    takePicture = async function (camera) {
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        console.log(data.uri)
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    }
});

export default CameraScreen;