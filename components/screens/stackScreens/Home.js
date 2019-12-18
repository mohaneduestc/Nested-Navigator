import React, { Component } from 'react';
import { View, Text , TouchableOpacity} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View >
        <TouchableOpacity style={{marginTop:50}}
          onPress={()=>this.props.navigation.navigate('Notifications')}>
          <Text> Home </Text>

        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
