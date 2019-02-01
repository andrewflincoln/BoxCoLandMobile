import React from 'react';
import { Text, View, Vibration, Modal, Button } from 'react-native';
import styles from '../styles'

export default class BoxModal extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <View> 

        <Modal
        visible={true}
        transparent={true}
        animationType='fade'
        onRequestClose={this.props.toggleModal}
        >
        <View>

          <View style={styles.boxModalView}>
            <View style={styles.boxModal}>
              <Text style={styles.modalBoxName}>Box {this.props.box.id}: {this.props.box.name}</Text>

              <View style={styles.modalButtons}>
                <Button style={styles.deleteButton} onPress={() => {this.props.deleteBox(this.props.box); Vibration.vibrate(100)}} title='Delete' />
                <Button title='Cancel' onPress={() => {this.props.toggleModal(this.props.box); Vibration.vibrate(100)}} />
              </View>

            </View>

          </View>

        </View>
        </Modal>  

      </View>


    )
  }


}