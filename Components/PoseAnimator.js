import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

class PoseAnimator extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://pose-animator-demo.firebaseapp.com/camera.html'}}
        style={{marginTop: 5}}
      />
    );
  }
}

export default PoseAnimator;
