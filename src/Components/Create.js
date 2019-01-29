import React, {Component} from 'react'
import {Modal, Text, View, StyleSheet} from 'react-native'


export default class Create extends Component {
  constructor(props) {
    super(props)

    this.state = {
      boxName: '',
      newItem: '',

    }
  }

  render() {
    return (
      <View>
          Hey here is the new page for creating boxes!
      </View>





    );
  }


}