import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Notifications extends Component {
  
  render() {
    return (
      <View >
        <TouchableOpacity style={{marginTop:50}}
          onPress={()=>this.props.navigation.navigate('TabNavigator')}>
        <Text> Notifications </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Notifications;
