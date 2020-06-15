import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Star = () => {
  // const [defaultRating, setDefaultRating] = useState(2);
  // const [maxRating, setMaxRating] = useState(5);

  return (
    <View style={styles.MainContainer}>
      <Icon name={'star'} size={20} color={'#28AAD8'} />
      <Icon name={'star'} size={20} color={'#28AAD8'} />
      <Icon name={'star'} size={20} color={'#28AAD8'} />
      <Icon name={'star'} size={20} color={'#28AAD8'} />
      <Icon name={'star'} size={20} color={'#28AAD8'} />
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Star;
