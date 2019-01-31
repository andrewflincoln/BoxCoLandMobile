import React from 'react';
import { StyleSheet} from 'react-native';
import { withTheme } from 'react-native-elements';


const styles = StyleSheet.create({
  box: {
    // marginBottom: 7,
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
    padding: 10,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: '#FFA364'
  },
  BoxModal: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1000,
    alignSelf: 'center'

  },
  innerModal: {
    alignSelf: 'center',
    marginTop: 300
    
  },
  homeHeader: {
    fontSize: 30,
    fontWeight: '700',
  },

  topView: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 0,
    marginRight: 10,
    marginLeft: 10,
    borderBottomWidth: 1,
    padding: 5
  },
  topNoFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    borderBottomWidth: 1,
    padding: 5
  },
  boxScroll: {
    marginBottom: 90,
  },
  plus: {
    fontSize: 20,
  },
  createView: {
    marginLeft: 20,
    marginRight: 20,
  },
  createHeader: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '700',
    justifyContent: 'center',

  },
  boxInput: {
    borderWidth: 3,
    borderRadius: 6,
    borderColor: 'black',
    fontSize: 20,
    padding: 10,
    marginBottom: 15
  },
  listInProgress: {
    fontSize: 13,
    padding: 10,
    borderWidth: 3,
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 10
  },




});

export default styles
