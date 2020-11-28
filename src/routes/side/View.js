/**
 * Side UI组件
 */
import React from 'react';
import './View.css'
import store from './../../store.js';


class View extends React.Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        store.subscribe(()=>{
          this.setState(store.getState())  
        })
    }
    render() {
        let { show,showSide,title } = this.props;
        if (show) {
            return (
                 <div onClick={()=>{showSide(false)}}>
                    <ul className="list">
                        <li className="item">首页</li>
                        <li className="item">影片</li>
                        <li className="item">影院</li>
                        <li className="item">E座卡</li>
                        <li className="item">{title}</li>
                        <li className="item">{this.state.reducerCount.count}</li>
                        <li className="item">{this.state.num1.num}</li>
                    </ul>
                </div>
            )
        } else {
            return '';
        }
    }
}


export default View;