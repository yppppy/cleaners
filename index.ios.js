import React, { Component } from 'react';  
import {  
  AppRegistry,  
  StyleSheet,  
  Text,  
  View  
} from 'react-native';  
  
  
import { createStore } from 'redux'  
import { Provider } from 'react-redux'  
  
import reducers from './reducers'  
  
import AddTodo from './containers/AddTodo'  
  
class reduxdemo extends Component {  
  
  render() {  
    // let initState = { num: 0,text:""};  
    let store = createStore(reducers);  
    return (  
        <Provider store={store}>  
          <AddTodo />  
        </Provider>  
    )  
  }  
}  
  
  
AppRegistry.registerComponent('reduxdemo', () => reduxdemo);  