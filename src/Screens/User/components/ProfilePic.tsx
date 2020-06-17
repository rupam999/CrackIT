import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useContext} from 'react';
import {Avatar} from 'react-native-paper';

const bgColor = ['#87BF60', '#BF6860', '#6085BF', '#00BAA0'];
function getBgColor() {
  let index = Math.floor(Math.random() * 4);
  return bgColor[index];
}
const ProfilePic = (props: any) => {
  return (
    <Avatar.Text
      style={styles.icon}
      size={80}
      label={`Yuganshu Sanjay Tickoo`.toUpperCase()[0]}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: getBgColor(),
  },
});

export default ProfilePic;