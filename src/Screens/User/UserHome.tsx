import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Dimensions} from 'react-native';

// interface UserHomeProps {}

const {width, height} = Dimensions.get('screen');

export const UserHome = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#FFF" barStyle='dark-content' />
        <Text>UserHome</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height
  }
});
