import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import RealTimePersonRemoval from './RealTimePersonRemoval';

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
            component={RealTimePersonRemoval}
            options={{title: 'Real Time Person Removal'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
