import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Menu} from 'react-native-paper';

import Setting from './settings.svg';

const Settings = (props: any) => {
  const {nav} = props;
  const [menu, toggle] = React.useState(false);
  return (
    <View style={styles.GearBtn}>
      <Menu
        anchor={
          <Setting
            size={23}
            color={'#28AAD8'}
            onPress={() => toggle(!menu)}
          />
        }
        visible={menu}
        onDismiss={() => {
          toggle(!menu);
        }}>
        <Menu.Item
          onPress={() => {
            toggle(!menu);
            nav.navigate('ReportBug');
          }}
          title="Report a Bug"
        />
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  GearBtn: {
    alignSelf: 'flex-end',
    padding: 20,
  },
});

export default Settings;
