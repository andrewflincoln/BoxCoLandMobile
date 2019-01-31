import React from 'react';
import Create from './src/Components/Create'
import Home from './src/Components/Home'
import Search from './src/Components/Search'
import {createStackNavigator, createAppContainer, defaultNavigationOptions} from 'react-navigation';



const MainNavigator = createStackNavigator(
{  
    Home: {screen: Home},
    Create: {screen: Create},
    Search: {screen: Search}
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    header: null,
  }
}
)

const App = createAppContainer(MainNavigator)

export default App