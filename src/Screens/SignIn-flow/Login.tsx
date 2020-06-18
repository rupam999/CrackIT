import React, { useState } from 'react';
import { 
    View, Text, StyleSheet, StatusBar, Dimensions, ActivityIndicator, Alert, SafeAreaView
} from 'react-native';
import {
    Container, Form, Item, Input, Button
} from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const Login = ({navigation}: any) => {
    const [showLoading, setShowLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginFunction = () => {
        setShowLoading(true);
        console.log(email, password)
        auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => navigation.navigate('UserDataChecking'))
        .catch( (error: any) => Alert.alert(error));
    }

    return (
      <>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        {!showLoading ?
        <Container style={ styles.FullBody }>
          <Container style={ styles.MainContainer }>
            <Text style={ styles.MainHeading }>Crack<Text style={ styles.ColorHeading }>IT</Text></Text>
            <Text></Text>
            <View style={ styles.FormArea }>
              <>
                <Item style={ styles.FormContent }>
                  {/* <Icon name="envelope" size={25} color='#28D8A1' /> */}
                  <Input 
                    placeholder='Your E-mail'
                    keyboardType= 'email-address'
                    onChangeText={ (email) => setEmail(email) }
                  />
                </Item>
                <Item>
                  {/* <Icon name='menu' /> */}
                  <Input 
                    placeholder='Your Password'
                    secureTextEntry={true}
                    keyboardType='default'
                    onChangeText={ (pass) => setPassword(pass) }
                  />
                </Item>
                <Button style={ styles.btn } onPress={ loginFunction }>
                  <Text style={ styles.btnText }>Login</Text>
                </Button>
                <Text style={ styles.accountText }>Don't have an Account? <Text style={ styles.LoginText } onPress={ () => { navigation.navigate('Register') } }>Sign up Now</Text></Text>
              </>
            </View>
          </Container>
        </Container>
        :
        <View style={styles.loadScreen}>
          <ActivityIndicator size={40} color='#28AAD8' />
          <Text>Taking you to a secure connection...</Text>
        </View>
        }
      </>
    );
}

const styles = StyleSheet.create({
  loadScreen: {
    flex: 1,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FullBody: {
    width: width,
    height: height,
    backgroundColor: '#fff',
    paddingLeft: '5%',
    paddingRight: '5.5%',
  },
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%',
  },
  MainHeading: {
    color: '#000',
    fontSize: 44,
    letterSpacing: 2.5,
  },
  ColorHeading: {
    fontSize: 44,
    color: '#28AAD8'
  },
  FormArea: {
    width: width,
    paddingLeft: '5%',
    paddingRight: '5.5%',
  },
  FormContent: {
    marginBottom: '1.5%',
  },
  btn: { 
    backgroundColor: '#28AAD8', 
    width: width*.92, 
    borderRadius: 10,
    height: '18%',
    marginTop: '10%',
    shadowColor: "#28AAD8",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  btnText: {
    color: '#fff',
    fontSize: 17,
    textTransform: 'uppercase',
    paddingLeft: '42.5%',
  },
  accountText: {
    textAlign: 'center',
    marginTop: '5%',
    fontSize: 16,
  },
  LoginText: {
    color: '#28AAD8',
    fontSize: 16,
  },
});