import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import RealTimePersonRemoval from './RealTimePersonRemoval';
import RTPR from './RTPR';
import PoseAnimator from './Components/PoseAnimator';

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'TensorFlow On Mobile'}}
          />
          <Stack.Screen
            name="RealTimePersonRemoval"
            // component={RealTimePersonRemoval}
            component={RTPR}
            options={{title: 'Real Time Person Removal'}}
          />
          <Stack.Screen
            name="PoseAnimator"
            component={PoseAnimator}
            options={{title: 'Pose Animator'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
