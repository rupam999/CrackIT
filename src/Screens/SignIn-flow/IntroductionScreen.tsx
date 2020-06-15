import React from 'react';
import { 
    View, StyleSheet, Dimensions, StatusBar, Image, 
} from 'react-native';
import {
    Text, Container, Button
} from 'native-base';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const IntroductionScreen = ({navigation}: any) => {
    return (
        <>
            <Container style={ styles.FullBody }>
                <Container style={ styles.MainContent }>
                    <Image
                        source={require('../../assets/Intro.png')}
                        style={ styles.IntroImage }
                    />
                    <Text></Text>
                    <Text style={ styles.MainHeading }>Crack<Text style={ styles.ColorHeading }>IT</Text></Text>
                    {/* <Text style={{ marginTop: '5%', textAlign: 'center' }}>
                        Hi User! Want to improve your skills, then join with us.
                    </Text> */}
                    <Button style={ styles.btn } onPress={ () => { navigation.navigate('Register') } }>
                        <Text style={ styles.btnText }>Create An Account</Text>
                    </Button>
                    <Text style={ styles.accountText }>Already have an Account? <Text style={ styles.LoginText } onPress={ () => { navigation.navigate('Login') } }>Login Now</Text></Text>
                </Container>
            </Container>
        </>
    );
}

const styles = StyleSheet.create({
    FullBody: {
        width: width,
        height: height,
        backgroundColor: '#fff',
        paddingLeft: '4.5%',
        paddingRight: '4.5%',
    },
    MainContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    IntroImage: {
        width: 220,
        height: 172
    },
    MainHeading: {
        color: '#000',
        fontSize: 44,
        letterSpacing: 2.5,
    },
    ColorHeading: {
        fontSize: 44,
        color: '#28AAD8'
    },
    btn: { 
        backgroundColor: '#28AAD8', 
        width: width*.85, 
        borderRadius: 10,
        height: '8%',
        marginTop: '10%',
        shadowColor: "#28AAD8",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    },
    btnText: {
        color: '#fff',
        fontSize: 17,
        textTransform: 'uppercase',
        paddingLeft: '26%',
    },
    accountText: {
        textAlign: 'center',
        marginTop: '5%',
        fontSize: 16,
    },
    LoginText: {
        color: '#28AAD8',
        fontSize: 16,
    },
});
