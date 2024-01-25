import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Home from './components/Home'
import { NavigationContainer } from '@react-navigation/native'
import Login from './components/Login'
import ClientInfo from './components/ClientInfo'
import ManagePage from './components/ManagePage'
import BottomTabNavigation from './components/BottomTabNavigator'

const App = () => {
  return (
 
      <NavigationContainer>
        <BottomTabNavigation/>
      
    </NavigationContainer>

  )
}

export default App