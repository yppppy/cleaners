import React, { Component } from 'react';
import  {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';

export default class Login extends Component {
  render() {
      return (
          <View style={{backgroundColor:'#f4f4f4',flex:1}}>

            <Image source={{uri: 'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/image/h%3D200/sign=61a4c45364061d95624630384bf50a5d/c8ea15ce36d3d5397ea5b2a83087e950342ab0c5.jpg'}}
               style={{ borderRadius:35,
                height:70,
                width:70,
                marginTop:40,
                alignSelf:'center'}} />
              <TextInput
                  style={styles.style_user_input}
                  placeholder="QQ号/手机号/邮箱"
                  numberOfLines={1}
                  autoFocus={true}
                  underlineColorAndroid={'transparent'}
                  textAlign="center"
              />
              <View style={{height:1,backgroundColor:'#f4f4f4'}}/>
              <TextInput
                  style={styles.style_pwd_input}
                  placeholder="密码"
                  numberOfLines={1}
                  underlineColorAndroid={'transparent'}
                  secureTextEntry={true}
                  textAlign="center"
              />
              <View style={styles.style_view_commit}>
                  <Text style={{color:'#fff'}}>登录</Text>
              </View>

              <View style={{flex:1,flexDirection:'row',alignItems:'flex-end',bottom:10}}>
                  <Text style={styles.style_view_unlogin}>无法登录?</Text>
                  <Text style={styles.style_view_register}>新用户</Text>
              </View>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    style_user_input:{
        backgroundColor:'#fff',
        marginTop:10,
        height:50
    },
    style_pwd_input:{
        backgroundColor:'#fff',
        height:35
    },
    style_view_commit:{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#63bbff',
        height:35,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    style_view_unlogin:{
        fontSize:12,
        color:'#63bbff',
        marginLeft:10,
    },
    style_view_register:{
        fontSize:12,
        color:'#63bbff',
        marginRight:10,
        alignItems:'flex-end',
        flex:1,
        flexDirection:'row',
        textAlign:'right'
    }
});
