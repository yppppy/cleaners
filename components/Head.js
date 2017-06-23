import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';

export default class Head extends Component {
	constructor(props, context){
	    super(props,context);
	}
	render() {
	    return (
	        <View style={[Layout.top,{flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}]}>
	          <Text >
	            登陆
	          </Text>
	          <Text style={{margin:6}}>
	            注册
	          </Text>
	        </View>
	        )
    }
}

const Layout = StyleSheet.create({
  top:{
    height:30,
    backgroundColor:'orange'
  }
})