import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

// interface ProfileProps {}

export const Profile = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {}
});
