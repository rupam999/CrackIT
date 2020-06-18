import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import {Container} from 'native-base';
import Pdf from 'react-native-pdf';

// interface TopicDescriptionProps {}

const {width, height} = Dimensions.get('screen');

const TopicDescription = (props: any) => {
    const source = {uri:'https://www.practiceaptitudetests.com/aptitude-test.pdf',cache:true};

    return (
        <Container style={styles.container}>
            <Pdf
                source={source}
                onLoadComplete={(numberOfPages,filePath)=>{
                    console.log(`number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page,numberOfPages)=>{
                    console.log(`current page: ${page}`);
                }}
                onError={(error)=>{
                    console.log(error);
                }}
                onPressLink={(uri)=>{
                    console.log(`Link presse: ${uri}`)
                }}
                style={styles.pdf}
            />
        </Container>
    );
};

export default TopicDescription;

const styles = StyleSheet.create({
  container: {},
    pdf: {
        flex:1,
        width,
        height,
    }
});
