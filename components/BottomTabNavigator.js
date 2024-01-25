import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './Login';
import ClientInfo from './ClientInfo';
import ManagePage from './ManagePage';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      activeColor="#27374D"
      barStyle={{backgroundColor: '#FFFFD0'}}
      shifting={true}
      labeled={true}>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="login" color={color} size={26} />
          ),
          tabBarColor: 'blue',
        }}
      />
      <Tab.Screen
        name="ClientInfo"
        component={ClientInfo}
        options={{
          tabBarLabel: 'Client Info',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
          tabBarColor: 'green',
        }}
      />
      <Tab.Screen
        name="ManagePage"
        component={ManagePage}
        options={{
          tabBarLabel: 'Manage',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="settings" color={color} size={26} />
          ),
          tabBarColor: 'red',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
