import React from 'react'
import {View, Text, TouchableOpacity, TouchableNativeFeedback, Vibration, ImageBackground} from 'react-native'
import styles from '../styles'

const Box = (props) => {
  const {id, name, contents} = props.newBox
  return(

    <TouchableNativeFeedback 
    onLongPress={() => {props.toggleModal(props.newBox); Vibration.vibrate(100)}} 
    >
      <View>
        <ImageBackground source={require('./Boxy9-cyan-bright.png')}  style={styles.box}>
          

              <Text style={styles.boxHeader}>{id} | {name}</Text>
              <Text>{
                    contents.map(item => {
                      if (contents.indexOf(item)  === contents.length - 1) return item
                      else return item + ', ' })
                  }
              </Text>

        </ImageBackground> 

      </View>
    </TouchableNativeFeedback>

 

  )
}

export default Box

