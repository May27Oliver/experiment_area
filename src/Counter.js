import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {    
    static defaultProps = {
        initCount:0,
    };//static屬性預設initCount的值

    static propTypes ={
        initCount : PropTypes.number,//預設prop資料的資料型別為number
    }

    constructor(props){
        super(props);
        this.state = {
            count:props.initCount,
        }
    }
    // state={
    //     count:0,
    //     time:1
    // }
    countTimes=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render() {
        return (
            <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.countTimes}>點我加一</button>
            </div>
        );
    }
}

Counter.defaultProps={initCount:0};//static屬性預設initCount的值

export default Counter;