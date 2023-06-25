import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {

    search = async()=>{
        const {keyWordElement:{value:keyWord}} = this
        // const {updateState} = this.props
        const channel = "searchChannel"

        PubSub.publish(channel,{isFirst:false,isLoading:true})

        // axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
        //     res => {
        //         PubSub.publish(channel,{isFirst:false,isLoading:false,users:res.data.items})
        //     },
        //     err => {
        //         PubSub.publish(channel,{isFirst:false,isLoading:false,err: err.message})
        //     }
        // )
        /**
         * fetch 是浏览器端自带的ajax实现方式,
         * 但是不是一次性获取想要的数据
         * 先是从服务端获取是否连接成功的应答
         * 然后在此应答的基础上,获取想要的数据
         * 
         * fetch本身是异步的,但是要以同步方式使用,要加关键字await.
         * 使用了await的函数要加关键字async.
         * 
         */
        try{
            const response = await fetch(`/api1/search/users?q=${keyWord}`);
            const data = await response.json();
            PubSub.publish(channel,{isFirst:false,isLoading:false,users:data.items});
        }catch(error){
            console.console.log('请求出错',error);
            PubSub.publish(channel,{isLoading:false, err:error.message});
        }

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
