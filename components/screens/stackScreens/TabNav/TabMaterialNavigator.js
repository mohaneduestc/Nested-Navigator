import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Sended from './TabMaterial/Sended';
import Receive from './TabMaterial/Receive';


    const TabMaterialNavigator = createMaterialTopTabNavigator({
        المرسلة:Sended,
        المطلوبة:Receive,
    },
    {
        tabBarPosition: 'top',
        initialRouteName:'المطلوبة',
        tabBarOptions: { 
            tabStyle:{
                marginLeft:50,
                shadowColor:'white'
            },
          scrollEnabled: true,
          activeTintColor: '#5C5C5C',
          inactiveTintColor: '#A2A2A2',
          labelStyle: {
            // fontWeight: 'bold',
            fontSize:15,
            fontFamily:'DroidKufi-Regular',
          },
          indicatorStyle: {
            backgroundColor: '#EF4065',
          },
          style: {
            backgroundColor: 'white',
          },
        },
      }
    );
    
    export default createAppContainer (TabMaterialNavigator);
