import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/stackScreens/Home';
import Notifications from './screens/stackScreens/Notifications';
import TabNavigator from './screens/stackScreens/TabNavigator';
import { createAppContainer } from 'react-navigation';

const Stack  = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions:{
      header:null,
    }
  },
  Notifications: {
    screen: Notifications,
    navigationOptions:{
      header:null,
    }
  },
  
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions:{
      header:null,
    }
  },
});


export default createAppContainer (Stack)


