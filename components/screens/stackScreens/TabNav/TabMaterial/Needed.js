import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TabMaterialNavigator from '../TabMaterialNavigator';

class Needed extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.fullWrapper}>
        <View style={styles.textWrapperStyle}>
          <Text style={styles.textStyle}> {new Date().toDateString()} </Text>
        </View>
        <View style={styles.reservationWrapperStyle}>
          <Text style={styles.reserveStyle}> حجوزاتي </Text>
        </View>
          <TabMaterialNavigator />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    fullWrapper: {
      flex:1
    },
    textWrapperStyle:{
        paddingTop:45,
        paddingRight:30
  
    },
    textStyle:{
      color:'#A2A2A2',
      fontSize:12,
      textAlign:'right',
    },
    reservationWrapperStyle:{
      paddingTop:10,
      paddingRight:22,
      marginBottom:10
    },
    reserveStyle:{
      fontFamily:'DroidKufi-Bold',
      fontSize:30
      
    }
  
  });
export default Needed;
