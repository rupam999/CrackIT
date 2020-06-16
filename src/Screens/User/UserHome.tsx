import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Dimensions} from 'react-native';
import InitialTest from '../../components/InitialTest';
import { Container } from 'native-base';

// interface UserHomeProps {}

const {width, height} = Dimensions.get('screen');

export const UserHome = ({navigation}: any) => {
  return (
    <Container style={styles.container}>
      <StatusBar backgroundColor="#FFF" barStyle='dark-content' />
      {/* <Button
        title="Take Test"
      /> */}
      <InitialTest />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height
  }
});
