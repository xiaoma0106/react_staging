import About from "../pages/About"
import Home from "../pages/Home"
import { Navigate } from "react-router-dom"
import Message from "../pages/Home/Message"
import News from "../pages/Home/News"
import Detail from "../pages/Detail"

// 路由表
// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: 'message',
                element: <Message />,
                children: [
                    {
                        path: 'detail',
                        element: <Detail />
                    }
                ]
            },
            {
                path: 'news',
                element: <News />
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to='/about' />
    }
]