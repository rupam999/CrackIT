import * as React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Subheading} from 'react-native-paper';

const Bar = (props: any) => {
  const {first = false, last = false, iconName, title, callBack} = props;
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={callBack}>
      <View
        style={[
          styles.appbar,
          first ? styles.first : null,
          last ? styles.last : null,
        ]}>
        <Icon name={iconName} size={20} />
        <Subheading style={styles.text}>{title}</Subheading>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  appbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    height: 50,
    backgroundColor: '#fff',
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  text: {
    paddingHorizontal: 20,
  },
  first: {
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  last: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default Bar;