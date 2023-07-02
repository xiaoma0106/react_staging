import React,{Component} from "react";
import MyNavLink from "../../components/MyNavLink";
import { Routes ,Route} from "react-router-dom";
import News from "./News";
import Message from "./Message";

export default class Home extends Component {
    render(){
        return (
            <div>
                <h3>我是Home的内容</h3>
                <div>
                    <div>
                        <ul className="nav nav-tabs">
                            <li>
                                <MyNavLink to="/home/news">News</MyNavLink>
                            </li>
                            <li>
                                <MyNavLink to="/home/message">Message</MyNavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Routes>
                            <Route path="/home/news" element={<News/>}/>
                            <Route path="/home/message" element={<Message/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        )
    }
}