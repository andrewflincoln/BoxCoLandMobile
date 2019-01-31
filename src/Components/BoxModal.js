import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, TouchableHighlight, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Box from './Box'
import boxData from '../../box-data.json'
import styles from '../styles'

export default class BoxModal extends React.Component {
  constructor(props) {
    super(props)

    // this.state={
    //   modalVisible: true
    // }
  }

  // toggleModal = () => {
  //   console.log(this.state.modalVisible)
  //   console.log('FIRING THE TOGGLER SIR')
  //   this.setState({modalVisible: !this.state.modalVisible})
  //   console.log(this.state.modalVisible)
  // }

  render() {
    return (
      <View> 
      <Modal
      // visible={this.props.toggleModal} 
      visible={true}
      transparent={true}
      animationType='fade'
      onRequestClose={() => console.log('that modals been closed for near on 30 years!')}
      >
        <View style={styles.box}>
          <Text>Here is the modal you were askin about. Don't know what you see in it, kid, but hey, I ain't usin it. Knock yourself out.</Text>
          <TouchableHighlight onPress={this.props.toggleModal}>
            <Text>Close the old man's modal</Text>
          </TouchableHighlight>

        </View>
      
      </Modal>
                
      </View>


    )
  }


}