import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Detail() {
    const [search,setSearch] = useSearchParams();
    const id =search.get('id');
    const title=search.get('title');
    const content=search.get('content');
    // setSearch({id:'008',title:'newTitle',content:'NewContent'})
    // console.log(id);
  return (
    <ul>
        <button onClick={() => setSearch({id:'008',title:'newTitle',content:'NewContent'})}>点我改变</button>
        <li>编号:{id}</li>
        <li>标题:{title}</li>
        <li>内容:{content}</li>
    </ul>
  )
}
