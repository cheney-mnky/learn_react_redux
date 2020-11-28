/**
 * headerUi组件
 */
import React from 'react';
import store from './../../store.js';
import {addTodo} from './../redux_only_demo/reducer.js';

class View extends React.Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleStoreChange)
    }
    handleStoreChange = () => {
    　　this.setState(store.getState())
    }
    render() {
        let { title, showSide, setTitle, show } = this.props;
        return (<div
            style={{ height: '50px', display: 'flex', alignItems: 'center', background: 'green' }}>
            <button onClick={()=>{showSide(!show)}}>{show?'隐藏':'显示'}菜单</button>
            <button onClick={()=>{setTitle('我的设置名称')}}>设置title</button>
            <button onClick={()=>{store.dispatch(addTodo(3))}}>+1</button>
            <button>{this.state.reducerCount.count}</button>
            <span style={{color:'#fff',marginLeft:'15px'}}>{title}</span>
        </div>);
    }
}

export default View;
