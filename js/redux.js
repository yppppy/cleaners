import React, { Component } from 'react';
import { render } from 'react-dom'

import { createStore } from 'redux'
import todoApp from '../reducers/reducer'
let store = createStore(todoApp)

export default class App  extends Component {

    constructor() {
        super();
        this.state={
        }
        this.state.show=<button onClick={(e)=>this.handleClick(e)}>点击</button>;
        
        // this.setState({show:<button onClick={(e)=>this.handleClick(e)}>点击</button>});
        // var unsubscribe = store.subscribe(() =>
        //     alert('回调：'+store.getState())
        // )
        //---------注册监听store的回调信息，回调后调用recall方法
        store.subscribe(() =>
            this.recall()
        )
    }
    recall(){
        // alert(store.getState());
        //store.getState()[key] //key是rducer.js中todoApp对象中的两个方法名作为键名
        alert('==='+store.getState()['todos']['bb']);
        //this.state.show=....;不能改变UI值
        this.setState({show:store.getState()['todos']['bb']}); //刷新了UI
    }
    handleClick(e){
        store.dispatch({ type: 'bb', text:'hello' }); //store抛出,调用todoApp函数
        //alert(e.target);
   }

    render() {
        return <div>
            redux<br/>
            {this.state.show}
        </div>;
    }
}
let rootElement = document.body;

React.render(
        <App/>
    ,
    rootElement
);