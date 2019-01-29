import React from 'react';
import Create from './src/Components/Create'
import Home from './src/Components/Home'
import {createStackNavigator, createAppContainer} from 'react-navigation';


const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Create: {screen: Create}
})

const App = createAppContainer(MainNavigator)

export default App