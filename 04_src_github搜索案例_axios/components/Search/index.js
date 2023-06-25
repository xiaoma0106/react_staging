import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    search = ()=>{
        const {keyWordElement:{value:keyWord}} = this
        const {updateState} = this.props

        updateState({isFirst:false,isLoading:true})

        axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
            res => {
                updateState({isFirst:false,isLoading:false,users:res.data.items})
            },
            err => {
                updateState({isFirst:false,isLoading:false,err: err.message})
            }
        )
        
    }

    render() {
        return (
            <section className='jumbotron'>
                <h3 className='jumbotron-heading'>搜索github用户</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder='输入关键词点击进行搜索'></input> &nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>

            </section>
        )
    }
}
