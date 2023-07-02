import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Messag() {
    const msgs = [
        { id: '001', title: '消息01', constent: '锄禾日当午' },
        { id: '002', title: '消息02', constent: '汗滴禾下土' },
        { id: '003', title: '消息03', constent: '谁知盘中餐' },
        { id: '004', title: '消息04', constent: '粒粒皆辛苦' },
    ]
    return (
        <div>
            <ul>
                {
                    msgs.map((m) => {
                        return (
                            <li key={m.id}>
                                <Link to={`detail/${m.id}/${m.title}/${m.constent}`}>{m.title}</Link>
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