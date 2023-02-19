import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  getStudentData = () => {
    axios.get('http://localhost:3000/api1/students').then(
      response => { console.log('成功了', response.data); },
      err => { console.log('失败了', err); }
    )
  }

  getCarData = () => {
    axios.get("http://localhost:3000/api2/cars").then(
      res => { console.log('成功了',res.data);},
      err => {console.log('失败了',err);}
    )
  }

  render() {
    return (
      <div>
        <h1>Heoool</h1>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
        <button onClick={this.getCarData}>点我获取汽车数据</button>
      </div>
    )
  }
}
