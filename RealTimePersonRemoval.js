import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  centerAlign: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const RealTimePersonRemoval = () => {
  return (
    <View style={styles.centerAlign}>
      <Text>Real Time Person Removal</Text>
    </View>
  );
};

export default RealTimePersonRemoval;
