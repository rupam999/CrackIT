import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView} from 'react-native';

// interface UserHomeProps {}

export const UserHome = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>UserHome</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {}
});
