import React, {Component} from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';

class ProfileScreen extends Component {
  static navigationOptions = ({navigation}) => {
    navigation.goBack()
  }
  render(){
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        {Linking.openURL('https://yahoo.com')}
      </View>
    )
  }
}
export default ProfileScreen;
