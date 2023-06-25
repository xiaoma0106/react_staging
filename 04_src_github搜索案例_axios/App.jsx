import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

  state = {
    users:[],
    isFirst:true,
    isLoading:false,
    err:'',
  }

  updateState = (stateObj)=>{
    console.log("状态更新了...");
    this.setState(stateObj)
  }
  

  render() {
    return (
      <div className='container'>
        <Search updateState = {this.updateState}/>
        <List {...this.state}/>
      </div>
    )
  }
}
