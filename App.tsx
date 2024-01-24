import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Home from './components/Home'
import { NavigationContainer } from '@react-navigation/native'
import Login from './components/Login'
import ClientInfo from './components/ClientInfo'

const App = () => {
  return (
    <View style= {{flex : 1}}>
      {/* <Login/> */}
      <ClientInfo/>
     <StatusBar
        animated={true}
        barStyle={'light-content'}
        backgroundColor={"#fff"}
      />
    </View>
  )
}

export default App