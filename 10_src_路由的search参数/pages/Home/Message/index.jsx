import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Messag() {
    const msgs = [
        { id: '001', title: '消息01', content: '锄禾日当午' },
        { id: '002', title: '消息02', content: '汗滴禾下土' },
        { id: '003', title: '消息03', content: '谁知盘中餐' },
        { id: '004', title: '消息04', content: '粒粒皆辛苦' },
    ]
    return (
        <div>
            <ul>
                {
                    msgs.map((m) => {
                        return (
                            <li key={m.id}>
                                <Link to={`detail?id=${m.id}&title=${m.title}&content=${m.content}`}>{m.title}</Link>
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