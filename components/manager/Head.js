import React, { Component } from 'react';
import Storage from '../../common/Storage'
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
} from 'react-native';


export default class Head extends Component {
	constructor(props, context){
	    super(props,context);
	}

	render() {
		const navigate = Storage.getInstance().getProp('navigate');
	    return (
	        <View style={[Layout.top,{flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}]}>
	          <Button
	            onPress={()=>{navigate('login')}}
	            color='green'
	            title="登陆"
	          />
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