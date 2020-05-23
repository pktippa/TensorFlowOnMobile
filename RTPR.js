import React, {PureComponent} from 'react';
import Video from 'react-native-video';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';

const PendingView = () => (
  <View
  // style={{
  //   flex: 1,
  //   backgroundColor: 'lightgreen',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // }}
  >
    <Text>Waiting</Text>
  </View>
);

var previewStyles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

const PreviewView = ({uri}) => {
  console.log('uri', uri);
  return (
    <>
      {/* <View>Waiting</View> */}
      <Video
        source={{uri}} // Can be a URL or a local file.
        //     ref={ref => {
        //   this.player = ref;
        // }}                                      // Store reference
        // onBuffer={this.onBuffer}                // Callback when remote video is buffering
        //     onError={this.videoError} // Callback when video cannot be loaded
        style={previewStyles.backgroundVideo}
      />
    </>
  );
};

class RTPR extends PureComponent {
  state = {
    recordedUri: null,
  };
  render() {
    const {recordedUri} = this.state;
    return (
      <View style={styles.container}>
        {recordedUri ? (
          <PreviewView uri={recordedUri} />
        ) : (
          <RNCamera
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            captureAudio={false}
            // androidRecordAudioPermissionOptions={{
            //   title: 'Permission to use audio recording',
            //   message: 'We need your permission to use your audio',
            //   buttonPositive: 'Ok',
            //   buttonNegative: 'Cancel',
            // }}
          >
            {({camera, status, recordAudioPermissionStatus}) => {
              if (status !== 'READY') return <PendingView />;

              return (
                <View
                  style={{
                    flex: 0,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    // onPress={() => this.takePicture(camera)}
                    onPress={() => this.recordVideo(camera)}
                    style={styles.capture}>
                    <Text style={{fontSize: 14}}> Record </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          </RNCamera>
        )}
      </View>
    );
  }

  takePicture = async function(camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log(data.uri);
  };

  recordVideo = async function(camera) {
    const options = {quality: '480p', maxDuration: 2, mute: true};
    const data = await camera.recordAsync(options);
    this.setState({recordedUri: data.uri});
    console.log(data.uri);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
});

export default RTPR;
