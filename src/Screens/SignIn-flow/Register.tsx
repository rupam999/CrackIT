import React, { Component, useState } from 'react';
import { 
  View, Text, StyleSheet, StatusBar, Dimensions, ActivityIndicator, Alert, SafeAreaView
} from 'react-native';
import {
  Container, Form, Item, Input, Button, Picker
} from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const Register = ({navigation}: any) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [conPass, setConPass] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheckError, setPasswordCheckError] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [emailPresent, setEmailPresent] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [emptyField, setEmptyField] = useState(false);
    const [weakPassword, setWeakPassword] = useState(false);

    const signUpFunction = () => {
        if(email && password){
        setEmptyField(false);
        if(password === conPass){
            setShowLoading(true);
            auth()
            .createUserWithEmailAndPassword(email, password)
            .then( (userCredentials: any) => {
                console.log('called');
                return userCredentials.user.updateProfile({
                displayName: name,
                // phoneNumber: data.number //Not working
                })
            })
            .then(() => navigation.navigate('UserDataChecking'))
            .catch((error: any) => {
                if (error.code === 'auth/email-already-in-use') {
                // alert('That email address is already in use!');
                setEmailPresent(true);
                } else if (error.code === 'auth/invalid-email') {
                // alert('That email address is invalid!');
                setInvalidEmail(true);
                } else if (error.code === 'auth/weak-password') {
                // alert('weak password');
                setWeakPassword(true);
                } else
                Alert.alert(error);
            });
        } else {
            setPasswordCheckError(true);
        }
        } else{ 
           setEmptyField(true);
        }
    }

    // if(showLoading){
    //   return(
    //     <SafeAreaView style={styles.loadScreen}>
    //       <ActivityIndicator size={40} color='28AAD8' />
    //       <Text>Taking you to a secure connection...</Text>
    //     </SafeAreaView>
    //   );
    // }

    return (
      <>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        {!showLoading ? 
        <Container style={ styles.FullBody }>
          <Container style={ styles.MainContainer }>
            <Text style={ styles.MainHeading }>Crack<Text style={ styles.ColorHeading }>IT</Text></Text>
            {/* <Text>For Volunteer</Text> */}
            {passwordCheckError ? <Text style={styles.ErrorText}>Password and Confirm Password does not match</Text> : null}
            {invalidEmail ? <Text style={styles.ErrorText}>Invalid E-mail Id</Text> : null}
            {emailPresent ? <Text style={styles.ErrorText}>A account exists with this E-mail id</Text> : null}
            {emptyField ? <Text style={styles.ErrorText}>Please fill all the fields</Text> : null}
            {weakPassword ? <Text style={styles.ErrorText}>Password should be atleast 6 Characters</Text> : null}
            <Text></Text>
            <View style={ styles.FormArea }>
            <>
                <Item style={ styles.FormContent }>
                  {/* <Icon name="reply-all" size={50} /> */}
                  <Input 
                    placeholder='Your Full Name'
                    autoFocus={false}
                    keyboardType='default'
                    onChangeText={ (fullname) => setName(fullname) }
                  />
                </Item>
                {/* <Item style={ styles.FormContent }>
                <Picker
                    mode="dropdown"
                    iosHeader="Select your Country"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.selected}
                    onValueChange={ this.onValueChange.bind(this)}
                    >
                    <Picker.Item label="Select your Country" value="" />
                    <Picker.Item label="India" value="india" />
                    <Picker.Item label="Japan" value="japan" />
                    <Picker.Item label="United States of America" value="usa" />
                    <Picker.Item label="United Kingdom" value="uk" />
                </Picker>
                </Item> */}
                <Item style={ styles.FormContent }>
                  {/* <Icon name="reply-all" size={50} /> */}
                  <Input 
                    placeholder='Your E-mail'
                    keyboardType='email-address'
                    onChangeText={ (emailid) => {setEmail(emailid)} }
                  />
                </Item>
                <Item  style={ styles.FormContent }>
                  {/* <Icon name='menu' /> */}
                  <Input 
                    placeholder='Your Password' 
                    secureTextEntry={true}
                    onChangeText={ (pass) => {setPassword(pass)} }
                  />
                </Item>
                <Item>
                  {/* <Icon name="reply-all" size={50} /> */}
                  <Input 
                    placeholder='Confirm Password'
                    secureTextEntry={true}
                    onChangeText={ (confirmPass) => {setConPass(confirmPass)} }
                    returnKeyType='done'
                  />
                </Item>
                <Button style={ styles.btn } onPress={ () => signUpFunction() }>
                  <Text style={ styles.btnText }>CREATE AN ACCOUNT</Text>
                </Button>
                <Text style={ styles.accountText }>Already have an Account? <Text style={ styles.LoginText } onPress={ () => { navigation.navigate('Login') } }>Login Now</Text></Text>
              </>
            </View>
          </Container>
        </Container>
        : 
        <SafeAreaView style={styles.loadScreen}>
          <ActivityIndicator size={40} color='28AAD8' />
          <Text>Taking you to a secure connection...</Text>
        </SafeAreaView>
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
    marginTop: '10%',
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
  ErrorText: {
    color: 'red',
    justifyContent: 'center',
    alignItems: 'center',
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
    height: '13.5%',
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
    paddingLeft: '25%',
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