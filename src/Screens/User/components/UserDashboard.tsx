import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Dashboard from 'react-native-dashboard';
 
const items = [
  { name: 'QUANTATIVE', background: '#3498db', icon: 'user' },
  { name: 'VERBAL', background: '#ef0202', icon: 'user' },
  { name: 'READING COMPREHSION', background: '#efcf02', icon: 'user' },
  { name: 'LOGICAL REASONING', background: '#02ef1d', icon: 'user' },
  { name: 'DATA INTERPRETATION', background: '#02cbef', icon: 'user' },
  { name: 'CALENDER', background: '#ef5802', icon: 'calendar' },
];
 
const UserDashboard = (props: any) =>  {
  const _card = (el: any) => {
    console.log('Card: ' + el.name)
  };
  
  return (
    <View style={styles.container}>
      <Dashboard items={items} background={true} card={_card} column={2} onPress={ () => Alert.alert('...10')} />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});

export default UserDashboard;