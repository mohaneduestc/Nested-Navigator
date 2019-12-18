import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Receive extends Component {

  render() {
    return (
      <View>
        <TouchableOpacity style={{marginTop: 50, marginLeft: 50, }} onPress={()=>this.props.navigation.navigate('Home')}>
            <Text> Receive </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default  Receive;
