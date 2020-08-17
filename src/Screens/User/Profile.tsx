import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import { Title, Container } from 'native-base';
import Star from './components/Star';
import ProfilePic from './components/ProfilePic';
import Bar from './components/Bar';
import Settings from './components/Settings';
import auth from '@react-native-firebase/auth';

// interface ProfileProps {}

const {width, height} = Dimensions.get('screen');

export const Profile = ({navigation}: any) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const onAuthStateChanged = (user: any) => {
    if(user) {
      setUser(user.displayName);
      console.log(user);
    }
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  const logout = () => {
    auth()
    .signOut()
    .then(() => navigation.navigate('Intro'));
  }

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#FFF" barStyle='dark-content' />
        {/* <Settings nav={navigation} /> */}
        <Container style={{ paddingTop: '5%' }}>
            <View style={styles.profileContainer}>
                <ProfilePic />
                <Title style={styles.userFullName}>{user ? user : 'Anonymous'}</Title>
                <Text>Bangalore</Text>
                <Star />
            </View>
            <View style={styles.recents}>
                <Title style={{padding: 10}}>Insights</Title>
                <Bar
                    first={false}
                    title={'DashBoard'}
                    iconName={'menu'}
                    callBack={() => navigation.navigate('Home')}
                />
                <Bar
                    first={false}
                    title={'Assignments'}
                    iconName={'book'}
                    callBack={() => navigation.navigate('EditProfile')}
                />
                <Bar
                    first={false}
                    title={'Time Till Next Test'}
                    iconName={'clock'}
                    callBack={() => navigation.navigate('EditProfile')}
                />
                <Bar
                    first={false}
                    title={'Assignment Answers'}
                    iconName={'book'}
                    callBack={() => navigation.navigate('EditProfile')}
                />
                <Bar
                    last={false}
                    title="Logout"
                    iconName={'log-out'}
                    callBack={logout}
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
