import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Box from './Box'
import boxData from '../../box-data.json'



export default class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      boxes: boxData
    }
  }
  

  addBoxes(newBox) {
    this.setState({boxes: [...boxes, newBox]})
  }


  render() {
    const {navigate} = this.props.navigation
    return (
      <View>
        <View style={styles.topView}>
          <View style={styles.headerView}>
            <Text style={styles.header}>BoxCoLand 7</Text>
          </View>
          <View style={styles.plusView}>
            <TouchableOpacity onPress={() => navigate('Create')}>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
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
