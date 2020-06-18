import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Container, Row, Col } from 'native-base';
import CustomIcon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {getBackgroundColor} from '../../../api/getBackgroundColor';

// interface userDashboardProps {}

const {width, height} = Dimensions.get('screen');

const userDashboard = (props: any) => {
  return (
    <Container style={styles.container}>
        <Row>
            <Col>
                <TouchableWithoutFeedback onPress={() => props.nav.navigate('TopicDescription')}>
                    <View style={[styles.TopicViewLeft, {backgroundColor: getBackgroundColor('Quantative', 30, 30),}]}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 75 }}>
                            <CustomIcon name="square-root-alt" size={35} color="#ddd" />
                            <Text style={styles.TopicName}>Quantative</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Col>
            <Col>
                <TouchableWithoutFeedback onPress={() => props.nav.navigate('Verbal')}>
                    <View style={[styles.TopicViewRight, {backgroundColor: getBackgroundColor('verbal', 30, 30),}]}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 75 }}>
                            <CustomIcon name="american-sign-language-interpreting" size={35} color="#ddd" />
                            <Text style={styles.TopicName}>Verbal</Text>   
                        </View>                     
                    </View>
                </TouchableWithoutFeedback>
            </Col> 
        </Row>

        <Row>
            <Col>
                <TouchableWithoutFeedback>
                    <View style={[styles.TopicViewLeft, {backgroundColor: getBackgroundColor('Reading Compreshion', 30, 30),}]}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 75 }}>
                            <CustomIcon name="language" size={35} color="#ddd" />
                            <Text style={styles.TopicName}>Reading Compreshion</Text>
                        </View>                     
                    </View>
                </TouchableWithoutFeedback>
            </Col>
            <Col>
                <TouchableWithoutFeedback onPress={() => props.nav.navigate('Logical')}>
                    <View style={[styles.TopicViewRight, {backgroundColor: getBackgroundColor('Logical Resoning', 30, 30),}]}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 75 }}>
                            <CustomIcon name="brain" size={35} color="#ddd" />
                            <Text style={styles.TopicName}>Logical Resoning</Text>   
                        </View>                     
                    </View>
                </TouchableWithoutFeedback>
            </Col>
        </Row>

        <Row>
            <Col>
                <TouchableWithoutFeedback>
                    <View style={[styles.TopicViewLeft, {backgroundColor: getBackgroundColor('Data Interpretation', 30, 30),}]}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 75 }}>
                            <CustomIcon name="table" size={35} color="#ddd" />
                            <Text style={styles.TopicName}>Data Interpretation</Text>   
                        </View>                     
                    </View>
                </TouchableWithoutFeedback>
            </Col>
            <Col>
                <TouchableWithoutFeedback onPress={() => props.nav.navigate('ResultGraph')}>
                    <View style={[styles.TopicViewRight, {backgroundColor: getBackgroundColor('Calender', 30, 30),}]}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 75 }}>
                            <FeatherIcon name="calendar" size={35} color="#ddd" />
                            <Text style={styles.TopicName}>Result</Text>   
                        </View>                     
                    </View>
                </TouchableWithoutFeedback>
            </Col>
        </Row>
    </Container>
  );
};

export default userDashboard;

const styles = StyleSheet.create({
    container: {
        width,
        height,
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: '4%'
    },
    TopicViewLeft: {
        width: '90%',
        marginRight: '0%',
        height: 180,
        borderRadius: 10,
    },
    TopicViewRight: {
        width: '86%',
        height: 180,
        borderRadius: 10,
    },
    TopicName: {
        textAlign: 'center',
        justifyContent: 'center',
        color: '#fff'
    },
});
