import React from 'react'
import {View, Text, TextInput, ScrollView, Button} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles'
import {SearchBar} from 'react-native-elements'
import Box from './Box'

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      foundBoxes: []

    }
  }

  searchBoxes = (term) => {
    this.setState({searchTerm: term})
    // console.log('WE ARE SEARCHING NOW')
    // console.log(this.props.navigation.getParam('boxes'))
    let toSearch = this.props.navigation.getParam('boxes')

    let found = toSearch.filter(box => box.contents.includes(term))

    // let found = this.props.navigation.getParam('boxes').filter(box => {
    //   box.contents.join().includes(this.state.searchTerm)
    // })

    this.setState({foundBoxes: found})
    console.log(JSON.stringify(found))
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <View>  
        <View style={styles.topNoFlex}>
          <Text style={styles.homeHeader}>Find Stuff</Text>
        </View>
        <View style={styles.createView}>
          <TextInput style={styles.boxInput}
              placeholder='Thing'
              value={this.state.searchTerm}
              onChangeText={(searchTerm) =>  this.searchBoxes(searchTerm) }
            />
{/* //removed button from here */}
        </View>
        <ScrollView style={styles.boxScroll}>
          {
            this.state.searchTerm ? 
            this.state.foundBoxes.map(box => <Box key={box.id} newBox={box}/>)
            : null
          }
        </ScrollView>


      </View>
    );
  }


}