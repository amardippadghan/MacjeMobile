import { View, Text } from 'react-native'
import React from 'react'
import Home from './components/Home'
import { NavigationContainer } from '@react-navigation/native'
import Login from './components/Login'

const App = () => {
  return (
    <View style= {{flex : 1}}>
      <Login/>
    </View>
  )
}

export default App