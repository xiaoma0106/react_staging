import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import "./App.css"

export default class App extends Component {
  // 状态在哪里,操作状态的函数就在哪里

  // 初始化状态
  state = {todos:[
      {id:"001",value:"吃饭",done:false},
      {id:"002",value:"睡觉",done:true},
      {id:"003",value:"敲代码",done:false},
      {id:"004",value:"谈恋爱",done:true}
    ]}

    // addTodo用于添加一个todo,接收的参数是todo对象
    addTodo = (todoObj) => {
      // 获取原始todos
      const {todos} = this.state
      // 在最前面追加一个todo对象
      const newTodos = [todoObj, ...todos]
      // 更新状态
      this.setState({todos:newTodos})
    }

    // updateTode用于更新一个todo对象
    updateTodo = (id,done)=>{
      // 获取原始todos
      const {todos} = this.state
      // 只改变id匹配的todo对象
      const newTodos = todos.map( (todoObj) => {
        if(todoObj.id === id){
          return {...todoObj,done}
        }else
          return todoObj
      })

      // 更新状态
      this.setState({todos:newTodos})
    }

    // deleteTod用于删除一个todo对象
    deleteTodo = (id) => {
      // 获取原始todos
      const {todos} = this.state
      // 删除指定id的todo对象
      const newTodos = todos.filter((todoObj) => todoObj.id !== id)

      // 更新状态
      this.setState({todos : newTodos})
    }

    // checkAllTodo用于全选
    checkAllTodo = (done) => {
      // 获取原始todos
      const {todos} = this.state
      // 更新所有todo对象
      const newTodos = todos.map( todoObj => {
        return {...todoObj,done}
      })
      // 更新状态
      this.setState({todos : newTodos})
    }

    // clearAllDoneTod用于清除所有已完成的
    clearAllDoneTodo = ()=> {
      // 获取原始todos
      const {todos} = this.state
      // 删除已完成的todo
      const newTodos = todos.filter( todoObj => !todoObj.done)

      // 更新状态
      this.setState({todos : newTodos})
    }

  render() {
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo = {this.addTodo}/>
          <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearAllDoneTodo={this.clearAllDoneTodo} />
        </div>
      </div>
    )
  }
}
