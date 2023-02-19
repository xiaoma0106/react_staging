import React, { Component } from 'react'

import "./index.css"
export default class Footer extends Component {

  // 全选checkbox的回调
  handleCheckAll= (event)=>{
    this.props.checkAllTodo(event.target.checked)
  }

  // 清除已完成任务的回调
  handleClearAllDone = ()=> {
    this.props.clearAllDoneTodo()
  }

  render() {
    const {todos} = this.props

    // 已完成的个数
    let count = todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0) ,0)
    // 总数
    let total = todos.length

    return (
      <div className='todo-footer'>
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} checked={total === count && total !== 0 ? true : false}/>
        </label>
        <span>
          <span>已完成{count}</span>/全部{total}
        </span>
        <button onClick={this.handleClearAllDone} className='btn btn-danger'>清除已完成任务</button>

      </div>
    )
  }
}
