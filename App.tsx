import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {IntroductionScreen} from './src/Screens/SignIn-flow';
import {Login} from './src/Screens/SignIn-flow';
import {Register} from './src/Screens/SignIn-flow';
import {Home} from './src/Navigators';
// import Dashboard from './src/Screens/User/components/UserDashboard';
import InitialTest from './src/components/InitialTest';
import TopicDescription from './src/Screens/User/TopicDescription';
import TopicDescription2 from './src/Screens/User/TopicDescription2';
import TopicDescription3 from './src/Screens/User/TopicDescription3';
import ResultGraph from './src/components/ResultGraph';
import UserDataChecking from './src/Screens/SignIn-flow/UserDatachecking';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle='dark-content'/>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Intro'}
          screenOptions={{headerShown: false}}
          >
          <Stack.Screen name="Intro" component={IntroductionScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="UserDataChecking" component={UserDataChecking} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Home2InitialTest" component={Home} />
          <Stack.Screen name="InitialTest" component={InitialTest} />
          <Stack.Screen name="TopicDescription" component={TopicDescription} />
          <Stack.Screen name="Logical" component={TopicDescription2} />
          <Stack.Screen name="Verbal" component={TopicDescription3} />
          <Stack.Screen name="ResultGraph" component={ResultGraph} /> 
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
