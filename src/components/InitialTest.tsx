import * as React from 'react';
import { Text, View, StyleSheet, StatusBar,Dimensions, Alert } from 'react-native';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import {useState} from 'react';

// interface InitialTestProps {}

const {width, height} = Dimensions.get('screen');

const InitialTest = (props: any) => {
    // For First Question answer (1 State, format -> Quesction Number Answer)
    const [firstAnswer, setFirstAnswer] = useState('');
  return (
    <>
    <StatusBar backgroundColor="#fff" barStyle='dark-content' />
    <ScrollView style={{width, height}}>
        <View>
          <Text>1) A farmer travelled a distance of 61 km in 9 hours. He travelled partly on foot at 4 km/hr and partly on bicycle at 9 km/hr. The distance travelled on foot is:</Text>
          <RadioButton.Group
            onValueChange={value => setFirstAnswer(value)}
            value={firstAnswer}
          >
            <RadioButton.Item label="First item" value="first answer" />
            <RadioButton.Item label="Second item" value="second answer" />
          </RadioButton.Group>
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
