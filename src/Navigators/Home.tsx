import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomIcon from 'react-native-vector-icons/Feather';
import {UserHome} from '../Screens/User';
import {Profile} from '../Screens/User';

const Tab = createBottomTabNavigator();

// interface UserHomeProps {}

export const Home = ({navigation}: any) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          const iconSize = 28;
          if (route.name === 'InitialUserHome') {
            return <CustomIcon name="home" color={color} size={iconSize} />;
          } else if (route.name === 'Profile') {
            return <CustomIcon name="user" color={color} size={iconSize} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#28AAD8',
        inactiveTintColor: '#A9A9A9',
        tabStyle: {
          backgroundColor: '#fff',
          elevation: 0,
          borderBottomWidth: 0,
          borderColor: '#fff',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0,
          shadowColor: 'red',
        },
      }}
      >
      <Tab.Screen 
        name="InitialUserHome" 
        component={UserHome} 
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {}
});
