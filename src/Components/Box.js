import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Box = ({newBox}) => {
  const {id, name, contents} = newBox
  return(
    <View style={styles.box}>
      <Text>{id} - {name}</Text>
      <Text>Contents: {contents}</Text>
      
    </View>
  )
}

export default Box


const styles = StyleSheet.create({
  box: {
    marginBottom: 15,
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 15,
  }
    

});