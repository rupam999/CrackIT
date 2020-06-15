import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {IntroductionScreen} from './src/Screens/SignIn-flow';
import {Login} from './src/Screens/SignIn-flow';
import {Register} from './src/Screens/SignIn-flow';
import {Home} from './src/Navigators';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle='dark-content'/>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Intro'}
          screenOptions={{headerShown: false}}
          >
          <Stack.Screen name="Intro" component={IntroductionScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
