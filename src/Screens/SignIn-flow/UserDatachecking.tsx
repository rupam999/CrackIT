import React, { Component, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Container } from 'native-base';
import auth from '@react-native-firebase/auth';

const UserDataChecking = ({navigation}: any) => {

    useEffect(() => {
        console.log('Called!')
        auth()
        .onAuthStateChanged( (user: any) => {
            if(user){
                navigation.navigate('Home2InitialTest')
            }
            else{
                navigation.navigate('Login')
            }
        });
    });

    // if(isLoading){
    //   return (
    //     <Container>
    //       <ActivityIndicator />
    //     </Container>
    //   );
    // }

    return(
      <Container>
        <Text>{ null }</Text>
      </Container>
    );
}

export default UserDataChecking;