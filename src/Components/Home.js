import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, TouchableHighlight, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Box from './Box'
import boxData from '../../box-data.json'
import styles from '../styles'
import BoxModal from './BoxModal'

export default class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      boxes: [],

      modalVisible: false,

      currentBox: {}

    }
  }

  componentWillMount() {
    this.setState({boxes: boxData})
  }
  //change this once storage is done--refreshes from json every time (bad/dumb)

  addBox = (newBox) => {
    newBox.id = this.state.boxes[this.state.boxes.length-1].contents.length+1
    this.setState({boxes: [...this.state.boxes, newBox]})
  }

  deleteBox = (toDelete) => {
    this.setState({boxes: this.state.boxes.filter(box => box.id != toDelete.id)})
    this.toggleModal()
  }

  toggleModal = (box) => {
    this.setState({modalVisible: !this.state.modalVisible})
    if (box) {
      this.setState({currentBox: box})
    }
  }


  render() {
    const {navigate} = this.props.navigation
    return (
      <View>

        <View style={styles.topView}>
          <TouchableOpacity onPress={() => navigate('Search', {boxes: this.state.boxes})}>
            <Icon color="black" name="search" size={25} />
          </TouchableOpacity>
          
          <View>
            <Text style={styles.homeHeader}>BoxCoLand 2</Text>
          </View>
          
          <View style={styles.plusView}>
            <TouchableOpacity onPress={() => navigate('Create', {addBox: this.addBox})}>
              <Icon color="black" name="plus-circle" size={25} />
            </TouchableOpacity>
          </View>
      
        </View>
        
        <ScrollView style={styles.boxScroll}>
          {
            this.state.boxes.map(box => <Box key={box.id} newBox={box} toggleModal={this.toggleModal}/>)
          }
        </ScrollView>
        
         {this.state.modalVisible ? 
          <View>
          <BoxModal
          box={this.state.currentBox}
          deleteBox={this.deleteBox}
          toggleModal={this.toggleModal}/>
          </View>
        : null }

      </View>
    );
  }
}
