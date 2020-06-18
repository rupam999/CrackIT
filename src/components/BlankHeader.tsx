import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import {Header, Left, Container, Button, Body, Title, Icon, Right} from 'native-base';
import CustomIcon from 'react-native-vector-icons/Feather';

// interface MainHeaderProps {}

const BlankHeader = (props: any) => {
  const {title} = props;
  return (
    <>
    <StatusBar backgroundColor="#fff" barStyle='dark-content' />
    {/* <Container> */}
        <Header style={styles.MainHeaderStyle}>
          <Left>
            {/* <Button transparent onPress={() => nav.goBack()}>
              <CustomIcon name='arrow-left' size={25} />
            </Button> */}
          </Left>
          <Body>
            <Title style={styles.HeaderTitleStyle}>{title}</Title>
          </Body>
          <Right>
            {/* <Button transparent>
              <CustomIcon name="user" size={25} />
            </Button> */}
          </Right>
        </Header>
    {/* </Container> */}
    </>
  );
};

export default BlankHeader;

const styles = StyleSheet.create({
  container: {},
  MainHeaderStyle: {
    backgroundColor: '#fff'
  },
  HeaderTitleStyle: {
    color: '#000',
    position: 'relative',
    left: '60%'
  },
});
