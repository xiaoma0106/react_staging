import React from "react";
import { Link, Outlet,useNavigate } from "react-router-dom";

export default function Messag() {
    const naviagte = useNavigate();
    const msgs = [
        { id: '001', title: '消息01', content: '锄禾日当午' },
        { id: '002', title: '消息02', content: '汗滴禾下土' },
        { id: '003', title: '消息03', content: '谁知盘中餐' },
        { id: '004', title: '消息04', content: '粒粒皆辛苦' },
    ]

    function showDetail(m){
        naviagte("detail",{
            replace:false,
            state:{
                id:m.id,
                title:m.title,
                content:m.content
            }
        })        
    }
    return (
        <div>
            <ul>
                {
                    msgs.map((m) => {
                        return (
                            <li key={m.id}>
                                <Link 
                                to='detail'
                                state={{id:m.id,title:m.title,content:m.content}}
                                >{m.title}</Link>&nbsp;
                                <button onClick={() => showDetail(m)}>详情</button>
                            </li>
                        )
                    })
                }
            </ul>
            <hr/>
            <Outlet/>
        </div>
    )
}