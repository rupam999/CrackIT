import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import { Title, Container } from 'native-base';
import Star from './components/Star';
import ProfilePic from './components/ProfilePic';
import Bar from './components/Bar';
import Settings from './components/Settings';

// interface ProfileProps {}

const {width, height} = Dimensions.get('screen');

export const Profile = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#FFF" barStyle='dark-content' />
        {/* <Settings nav={navigation} /> */}
        <Container style={{ paddingTop: '5%' }}>
            <View style={styles.profileContainer}>
                <ProfilePic />
                <Title style={styles.userFullName}>Yuganshu Sanjay Tickoo</Title>
                <Text>Bangalore</Text>
                <Star />
            </View>
            <View style={styles.recents}>
                <Title style={{padding: 10}}>Insights</Title>
                <Bar
                    first={false}
                    title={'Edit Profile'}
                    iconName={'edit'}
                    callBack={() => navigation.navigate('EditProfile')}
                />
                <Bar
                    first={false}
                    title={'Edit Profile'}
                    iconName={'edit'}
                    callBack={() => navigation.navigate('EditProfile')}
                />
                <Bar
                    first={false}
                    title={'Edit Profile'}
                    iconName={'edit'}
                    callBack={() => navigation.navigate('EditProfile')}
                />
                <Bar
                    first={false}
                    title={'Edit Profile'}
                    iconName={'edit'}
                    callBack={() => navigation.navigate('EditProfile')}
                />
                <Bar
                    last={false}
                    title="Logout"
                    iconName={'log-out'}
                    callBack={null}
                />
            </View>
        </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
  profileContainer: {
    flex: 0.85 / 3,
    alignItems: 'center',
  },
  userFullName: {
    color: '#000'
  },
  recents: {
    flex: 2.15 / 3,
    padding: 20,
  },
});
