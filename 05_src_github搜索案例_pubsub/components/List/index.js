import React,{ Component} from 'react'
import PubSub from 'pubsub-js'
import './index.css'
/**
 * 利用pubsub-js来传递组件的之间的消息,
 * 步骤:
 *      1.下载
 *          npm i pubsub-js --save
 *      2. 引入
 *          import PubSub form 'pubsub-js'
 *      3.使用之发布消息
 *          PubSub.publish("管道名称",{数据对象})
 *      4.使用之接收消息
 *          PubSub.subscribe("管道名称",function(_,obj){})
 *          
 */
export default class List extends Component{

    state = {
        user:[],
        isFirst:true,
        isLoading:false,
        err:'',
    }

    channel = "searchChannel"

    // 管道在该挂载该组件时就要订阅
    // 将从管道接收来的消息更新到该组件的state中
    componentDidMount(){
        this.token = PubSub.subscribe(this.channel,(_,stateObj)=>{
            console.log("收到消息了...");
            this.setState(stateObj)
        })
    }

    // 卸载时不要忘记退订该管道
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }

    render(){
        const {users,isFirst,isLoading,err} = this.state

        return (
            <div className='row'>
                {
                    isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
                    isLoading ? <h2>Loading......</h2> :
                    err ? <h2 style={{color:'red'}}>{err}</h2> :
                    users.map(userObj => {
                        return (
                            <div key = {userObj.id} className="card">
                                <a rel = "noreferrer" href={userObj.html_url} target = "_blank">
                                    <img alt = "head_portrait" src={userObj.avatar_url} style = {{width:'100px'}}></img>
                                </a>
                                <p className='card-text'>{userObj.login}</p>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}