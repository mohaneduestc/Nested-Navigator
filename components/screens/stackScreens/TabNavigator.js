import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Properties from './TabNav/Properties';
import TabMaterialNavigator from './TabNav/TabMaterialNavigator';
import Needed from './TabNav/TabMaterial/Needed';



  
  const TabNavigator = createBottomTabNavigator({ 
    عقاراتى:Properties ,
    حجوزاتي:Needed,
 
},
{
    animationEnabled:true,
    swipeEnabled:true,
    tabBarPosition:"bottom",
    tabBarOptions:{
      style:{
        height:49
      },
      activeTintColor:'#EF4065',
      inactiveTintColor:'#d1cece',
      showIcon: true, 
      showLabel:true
    }


});

export default createAppContainer(TabNavigator);
