import React,{Component} from "react";
import { Route,Routes,NavLink, Navigate} from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home";
import About from "./pages/About";

export default class App extends Component {

    // NavLink高亮,{isActive}表示当前元素是否选中的状态
    computedClass = ({isActive})=>{
        return isActive ? "list-group-item atguigu" : "list-group-item"; 
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/** 在React中靠路由链接实现切换组件--编写路由链接 */}
                            {/* <Link className="list-group-item" to="/about">About</Link>
                            <Link className="list-group-item" to="/home">Home</Link> */}
                            <NavLink className={this.computedClass} to="/about">About</NavLink>
                            <NavLink className={this.computedClass} to="/home">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/** 注册路由 */}
                                {/** Switch已经不再使用了,用Routes */}
                                <Routes>
                                    {/* Route要使用的组件属性,component不再使用,使用element.注意书写格式 */}
                                    <Route path="/about" element={<About/>}/>
                                    <Route path="/home" element={<Home/>}/>
                                    {/* 默认路径设置 */}
                                    <Route path="/" element={<Navigate to="/about"/>} /> 
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}