import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Container, Row, Col} from 'native-base';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
  
import HeaderWithBack from './HeaderWithBack';

// interface resultGraphProps {}

const {width, height} = Dimensions.get('screen');

const resultGraph = ({navigation}: any) => {
  return (
    <Container style={styles.container}>
        <HeaderWithBack title='My Progress' nav={navigation} />
        <Container style={{ paddingLeft: '2%', }}>
            <Container style={styles.Heading}>
                <Text style={styles.overallAvg}>Overall Average</Text>
                <Text style={styles.MyMarks}>7.06</Text>
            </Container>
            <Container style={styles.GraphContent}>
                <LineChart
                    data={{
                    labels: ["Feb 03", "Feb 18", "May 03", "May 18", "Jun 03", "Jun 18"],
                    datasets: [
                        {
                        data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                        ]
                        }
                    ]
                    }}
                    width={width*.98}
                    height={220}
                    // yAxisLabel={null}
                    // yAxisSuffix="M"
                    yAxisInterval={1}
                    chartConfig={{
                    backgroundColor: "#fff",
                    backgroundGradientFrom: "#fff",
                    backgroundGradientTo: "#fff",
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(40, 170, 216, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(40, 170, 216, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#28AAD8"
                    }
                    }}
                    bezier
                    style={{
                        marginVertical: 6,
                        marginHorizontal: 0,
                        borderRadius: 16,
                        position: 'relative',
                        left: '-6.5%',
                    }}
                />
                <View style={styles.lowerView}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.writtenText}>Test Taken &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                        <Text style={styles.numberOfTestWritten}>9</Text>
                        <Text></Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.writtenText}>Projected Score</Text>
                        <Text style={styles.numberOfTestWritten}>8</Text>
                        <Text></Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.writtenText}>Test to go &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                        <Text style={styles.numberOfTestWritten}>15</Text>
                        <Text></Text>
                    </View>
                </View>
            </Container>
        </Container>
    </Container>
  );
};

export default resultGraph;

const styles = StyleSheet.create({
    container: {
        height,
    },
    Heading: {
        width,
        flex: 0.5/3,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    overallAvg: {
        color: '#000',
        fontSize: 22,
        lineHeight: 33,
        marginLeft: '2%',
    },
    MyMarks: {
        color: '#28AAD8',
        fontSize: 30,
    },
    GraphContent: {
        width,
        flex: 2.5/3,
    },
    numberOfTestWritten: {
        marginLeft: '5%',
        color: '#28AAD8',
        fontSize: 30,
    },
    writtenText: {
        marginLeft: '3.5%',
        color: '#000',
        fontSize: 20,
        textAlign: 'left',
    },
    lowerView: {
        marginTop: '5%',
    },
});
