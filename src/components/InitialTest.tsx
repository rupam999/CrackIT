import * as React from 'react';
import { Text, View, StyleSheet, StatusBar,Dimensions, Alert } from 'react-native';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import {useState} from 'react';

// interface InitialTestProps {}

const {width, height} = Dimensions.get('screen');

const InitialTest = (props: InitialTestProps) => {
    const [firstAnswer1, setFirstAnswer1] = useState('qoneFirst');
    const [firstAnswer2, setFirstAnswer2] = useState('qoneSecond');
  return (
    <>
    <StatusBar backgroundColor="#fff" barStyle='dark-content' />
    <ScrollView style={{width, height}}>
        
        {/* <Container style={styles.MainBodyContainer}>
           
        </Container>     */}
        <Text>Hello World!....</Text>
        <View>
            <RadioButton
            value="first"
            status={checked === 'qoneFirst' ? 'checked' : 'unchecked'}
            onPress={() => { Alert.alert('ok 1st') }}
            />
            <RadioButton
            value="second"
            status={checked === 'qoneSecond' ? 'checked' : 'unchecked'}
            onPress={() =>{Alert.alert('ok')}}
            />
      </View>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
        <Text>Hello World!....</Text>
    </ScrollView>
    </>
  );
};

export default InitialTest;

const styles = StyleSheet.create({
  container: {},
  MainBodyContainer: {
      width,
      height,
      backgroundColor: '#fff',
  },
});
