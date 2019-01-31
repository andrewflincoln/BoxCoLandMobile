import React from 'react'
import {View, Text, TouchableOpacity, TouchableNativeFeedback, Vibration} from 'react-native'
import styles from '../styles'

const Box = (props) => {
  const {id, name, contents} = props.newBox
  return(
    <TouchableNativeFeedback 
    onLongPress={props.toggleModal} 
    onPress={Vibration.vibrate([10, 100])}
    >
      <View style={styles.box}>
        <Text>{id} - {name}</Text>
        <Text>Contents: {
              contents.map(item => {
                if (contents.indexOf(item)  === contents.length - 1) return item
                else return item + ', ' })
            }
        </Text>
        
      </View>
    </TouchableNativeFeedback>
  )
}

export default Box

