import * as React from 'react';
import { Text, View, StyleSheet, StatusBar,Dimensions, Alert } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Button } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import {useState} from 'react';
import BlankHeader from './BlankHeader';

// interface InitialTestProps {}

const {width, height} = Dimensions.get('screen');

const InitialTest = (props: any) => {
    // For First Question answer (1 State, format -> Quesction Number Answer)
    const [firstAnswer, setFirstAnswer] = useState('');
    const [secondAnswer, setSecondAnswer] = useState('');
    const [thirdAnswer, setThirdAnswer] = useState('');
    const [fourthAnswer, setFourthAnswer] = useState('');
    const [fifthAnswer, setFifthAnswer] = useState('');
    const [sixthAnswer, setSixthAnswer] = useState('');
    const [seventhAnswer, setSeventhAnswer] = useState('');
    const [eighthAnswer, setEighthAnswer] = useState('');
    const [ninethAnswer, setNinethAnswer] = useState('');
    const [tenthAnswer, setTenthAnswer] = useState('');
    const [count, setCount] = useState(0);

    const showAnswer = () => {
      console.log(firstAnswer, typeof(firstAnswer));
      const number = Math.floor((Math.random() * 10) + 1);
      setCount(number)
      Alert.alert('Your Score is', String(count))
    }

  return (
    <>
    <StatusBar backgroundColor="#fff" barStyle='dark-content' />
    <BlankHeader title={'Test 101'} />
    <ScrollView style={[styles.MainScroll, {width, height}]}>
        <View style={styles.MainQuesctionDiv}>
          <Text style={{ color: '#000' }}>1) A farmer travelled a distance of 61 km in 9 hours. He travelled partly on foot at 4 km/hr and partly on bicycle at 9 km/hr. The distance travelled on foot is:</Text>
          <RadioButton.Group
            onValueChange={value => setFirstAnswer(value)}
            value={firstAnswer}
          >
            <RadioButton.Item label="14" value="1" />
            <RadioButton.Item label="15" value="2" />
            <RadioButton.Item label="16" value="3" />
            <RadioButton.Item label="17" value="4" />
          </RadioButton.Group>
        </View>
        <View style={styles.MainQuesctionDiv}>
          <Text>2) Walking at the rate of 4 kmph a man cover certain distance in 2 hr 45 min. Running at a speed of 16.5 kmph the man will cover the same distance in.:</Text>
          <RadioButton.Group
            onValueChange={value => setSecondAnswer(value)}
            value={secondAnswer}
          >
            <RadioButton.Item label="12" value="1" />
            <RadioButton.Item label="25" value="2" />
            <RadioButton.Item label="40" value="3" />
            <RadioButton.Item label="60" value="4" />
          </RadioButton.Group>
        </View>
        <View style={styles.MainQuesctionDiv}>
          <Text>3) Excluding stoppages, the speed of a bus is 54 kmph and including stoppages, it is 45 kmph. For how many minutes does the bus stop per hour?</Text>
          <RadioButton.Group
            onValueChange={value => setThirdAnswer(value)}
            value={thirdAnswer}
          >
            <RadioButton.Item label="4" value="1" />
            <RadioButton.Item label="6" value="2" />
            <RadioButton.Item label="8" value="3" />
            <RadioButton.Item label="None of these" value="4" />
          </RadioButton.Group>
        </View>
        <View style={styles.MainQuesctionDiv}>
          <Text>4) A thief is noticed by a policeman from a distance of 200 m. The thief starts running and the policeman chases him. The thief and the policeman run at the rate of 10 km and 11 km per hour respectively. What is the distance between them after 6 minutes?</Text>
          <RadioButton.Group
            onValueChange={value => setFourthAnswer(value)}
            value={fourthAnswer}
          >
            <RadioButton.Item label="100m" value="1" />
            <RadioButton.Item label="150m" value="2" />
            <RadioButton.Item label="190m" value="3" />
            <RadioButton.Item label="200m" value="4" />
          </RadioButton.Group>
        </View>
        <View style={styles.MainQuesctionDiv}>
          <Text>5) The speed of a car increases by 2 kms after every one hour. If the distance travelling in the first one hour was 35 kms. what was the total distance travelled in 12 hours?</Text>
          <RadioButton.Group
            onValueChange={value => setFifthAnswer(value)}
            value={fifthAnswer}
          >
            <RadioButton.Item label="456km" value="1" />
            <RadioButton.Item label="482km" value="2" />
            <RadioButton.Item label="552km" value="3" />
            <RadioButton.Item label="556km" value="4" />
          </RadioButton.Group>
        </View>
        <View style={styles.MainQuesctionDiv}>
          <Text>6) In a tournament, there are 43 junior level and 51 senior level participants. Each pair of juniors play one match. Each pair of seniors play one match. There is no junior versus senior match. The number of girl versus girl matches in junior level is 153, while the number of boy versus boy matches in senior level is 276. The number of matches a boy plays against a girl is:</Text>
          <RadioButton.Group
            onValueChange={value => setSixthAnswer(value)}
            value={sixthAnswer}
          >
            <RadioButton.Item label="1098" value="1" />
            <RadioButton.Item label="1054" value="2" />
            <RadioButton.Item label="1064" value="3" />
            <RadioButton.Item label="1032" value="4" />
          </RadioButton.Group>
        </View>
        <View style={styles.MainQuesctionDiv}>
          <Text>7)How many two-digit numbers, with a non-zero digit in the units place, are there which are more than thrice the number formed by interchanging the positions of its digits?</Text>
          <RadioButton.Group
            onValueChange={value => setSeventhAnswer(value)}
            value={seventhAnswer}
          >
            <RadioButton.Item label="60" value="1" />
            <RadioButton.Item label="50" value="2" />
            <RadioButton.Item label="85" value="3" />
            <RadioButton.Item label="34" value="4" />
          </RadioButton.Group>
        </View>
        <View style={styles.MainQuesctionDiv}>
          <Text>8)  The value of the sum 7 x 11 + 11 x 15 + 15 x 19 + ...+ 95 x 99 is</Text>
          <RadioButton.Group
            onValueChange={value => setEighthAnswer(value)}
            value={eighthAnswer}
          >
            <RadioButton.Item label="49506" value="1" />
            <RadioButton.Item label="80707" value="2" />
            <RadioButton.Item label="87345" value="3" />
            <RadioButton.Item label="83268" value="4" />
          </RadioButton.Group>
        </View>
        <View style={styles.MainQuesctionDiv}>
          <Text>9) A jar contains a mixture of 175 ml water and 700 ml alcohol. Gopal takes out 10% of the mixture and substitutes it by water of the same amount. The process is repeated once again. The percentage of water in the mixture is now</Text>
          <RadioButton.Group
            onValueChange={value => setNinethAnswer(value)}
            value={ninethAnswer}
          >
            <RadioButton.Item label="30.3" value="1" />
            <RadioButton.Item label="35.2" value="2" /> 
            <RadioButton.Item label="25.4" value="3" />
            <RadioButton.Item label="20.5" value="4" />
          </RadioButton.Group>
        </View>
        <View style={styles.MainQuesctionDiv}>
          <Text>10) From a rectangle ABCD of area 768 sq cm, a semicircular part with diameter AB and area 72π sq cm is removed. The perimeter of the leftover portion, in cm, is</Text>
          <RadioButton.Group
            onValueChange={value => setTenthAnswer(value)}
            value={tenthAnswer}
          >
            <RadioButton.Item label="80+16π" value="1" />
            <RadioButton.Item label="86+8π" value="2" />
            <RadioButton.Item label="88+12π" value="3" />
            <RadioButton.Item label="82+24π" value="4" />
          </RadioButton.Group>
        </View>
        <Button style = {styles.submitBtn}
            onPress={showAnswer}
            >
            <Text style={styles.btnText}>Submit the Test</Text>
        </Button>
        <View style={{marginBottom: 35}}>
          <Text></Text>
        </View>
    </ScrollView>
   
    </>
  );
};

export default InitialTest;

const styles = StyleSheet.create({
  container: {},
  MainBodyContainer: {
      width,
      height,
      backgroundColor: '#fff',
  },
  MainScroll: {
    paddingLeft: '4%',
    paddingRight: '4%',
    backgroundColor: '#fff',
  },
  MainQuesctionDiv: {
    marginTop: 10,
  },
  submitBtn: {
    backgroundColor: '#28AAD8', 
    width: width*.92, 
    borderRadius: 10,
    marginTop: 20,
    height: 50,
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
    marginLeft: '35%',
    color: '#fff',
  },
});
