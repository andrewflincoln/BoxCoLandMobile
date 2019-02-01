import React, {Component} from 'react'
import {Text, View, TextInput, Button} from 'react-native'
import styles from '../styles'


export default class Create extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boxName: '',
      newItem: '',
      boxItems: [],
    }
  }

  addBox = () => {
    const newBox = {
      name: this.state.boxName,
      contents: this.state.boxItems
    }
    console.log('NEW BOX, CREATE in CREATE.addBox: ' + JSON.stringify(newBox))
     this.props.navigation.getParam('addBox')(newBox)
    this.setState({boxName: '', boxItems: []})
  }

  render() {
    const addBox = this.props.navigation.getParam('addBox')
    return (
      <View >
        <View style={styles.topNoFlex}>
          <Text style={styles.homeHeader}>Pack a New Box</Text>
        </View>

        <View style={styles.createView}>
          <Text>Box name:</Text>
          <TextInput style={styles.boxInput}
            placeholder='Boxy McBoxface'
            value={this.state.boxName}
            onChangeText={(boxName) => this.setState({boxName}) }
          />

          <Text>Add item:</Text>
          <TextInput style={styles.boxInput}
            placeholder='Next item'
            value={this.state.newItem}
            onChangeText={(newItem) => this.setState({newItem}) }
          />

          <Button
            title='Add this item'
            onPress={() => this.setState({boxItems: [...this.state.boxItems, this.state.newItem], newItem: ''})}
          />
          
          <Text style={styles.listInProgress}>
            {
              this.state.boxItems.map(item => {
                if (this.state.boxItems.indexOf(item)  === this.state.boxItems.length - 1) return item
                else return item + ', ' })
            }

          </Text>

          <Button
            title='Seal This Box'
            onPress = {this.addBox}
          />
        </View>
      </View>

    );
  }


}
