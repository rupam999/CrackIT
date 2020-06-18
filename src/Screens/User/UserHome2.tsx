import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Dimensions} from 'react-native';
import InitialTest from '../../components/InitialTest';
import { Container, Button } from 'native-base';
import MainHeader from '../../components/MainHeader';
import UserDashboard from '../User/components/UserDashboard';

// interface UserHomeProps {}

const {width, height} = Dimensions.get('screen');

export const UserHome2 = ({navigation}: any) => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle='dark-content' />
      <Container style={styles.container}>
        <MainHeader title={'CrackIT'} />
        { true ? 
          <Button onPress={() => navigation.navigate('InitialTest') } style={styles.takeATestbutton}>
            <Text style={{marginLeft: '35%', color: '#fff'}}>Take a Test Now</Text>
          </Button>
        : <UserDashboard nav={navigation} /> }
      </Container>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
  takeATestbutton: {
    marginLeft: '4%',
    marginRight: '4%',
    borderRadius: 10,
    marginTop: '4%',
    backgroundColor: '#28AAD8'
  },
});
