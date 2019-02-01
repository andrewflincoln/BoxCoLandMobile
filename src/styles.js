import React from 'react';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  box: {
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
    padding: 7,
    borderWidth: 1,
  },
  boxHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderRadius: 1,
    borderStyle: 'dashed'
  },

  boxModal: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '50%',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 15,
    padding: 10,

  },
  boxModalView: {
    justifyContent: 'center',  
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalBoxName: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  modalButtons: {
    flexDirection: 'row',
  },
  deleteButton: {
    marginBottom: 20
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
    marginBottom: 87,
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
    marginBottom: 5
  },
  listInProgress: {
    fontSize: 13,
    padding: 10,
    borderWidth: 3,
    borderRadius: 6,
    marginTop: 5,
    marginBottom: 5
  },

});

export default styles
