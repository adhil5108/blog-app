import axios from 'axios'
import React,{useEffect, useState} from 'react'
import './home.css'
function Home() {

let [data,setData]=useState([])

useEffect(()=>{
    axios.get("http://localhost:6969/blogs")
.then(res=>setData(res.data))
.catch(err=>console.log(err))
},[])

  return (
 <div>
    <h1 style={{display:"flex",justifyContent:"center", marginTop:"20px", fontSize:"60px"}}>Read Blogs</h1>
  <div id='blogs'>
{[...data].reverse().map((e,i)=>(
    <div className="blog">
        <h1>{e.title}</h1>
        <p> {e.content}</p>
    </div>
))}

</div>
 </div>
  )
}

export default Home