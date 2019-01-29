import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Box from './src/Components/Box'
import Create from './src/Components/Create'
import boxData from './box-data.json'
import {createStackNavigator, createAppNavigator} from 'react-navigation'


export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      boxes: boxData
    }
  }
  

  addBoxes(newBoxes) {
    this.setState({boxes: [...boxes, newBox]})
  }



  render() {
    return (
      <View>
        <View style={styles.topView}>
          <View style={styles.headerView}>
            <Text style={styles.header}>BoxCoLand 2 </Text>
          </View>
          <View style={styles.plusView}>
            <Text style={styles.plus}>+</Text>
          </View>
      
        </View>
        <ScrollView>
          {
            this.state.boxes.map(box => <Box key={box.id} newBox={box}/>)
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignSelf: 'flex-start',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 60,
    fontSize: 20,
    fontWeight: '700',
    justifyContent: 'center'
    
  },
  headerView: {
    alignSelf: 'center',
    marginLeft: 60,
    marginRight: 25,
  },
  topView: {
    alignItems: 'center',
    flexDirection: "row"
  },
  plus: {
    fontSize: 20,
    alignSelf: 'flex-end',
    marginBottom: 10,
    marginLeft: 60,
    fontSize: 20,
  },
  plusView: {
    alignSelf: 'flex-end'
  }


});
