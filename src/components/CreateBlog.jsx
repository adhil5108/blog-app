import React, { useState } from 'react'
import './create.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateBlog() {
const navigate=useNavigate()
const [blog,setBlog]=useState({
  title:"",
  content:""
})

function change(e){
const {name,value}=e.target;
setBlog({...blog,[name]:value})
}

function submit(e){
  e.preventDefault()
  axios.post("http://localhost:6969/blogs",blog)
  .then(()=>{setBlog({title:"",content:""})})
  .catch(err=>console.error(err))
navigate('/')

}

  return (
    <div id='create'>
        <h1>create a blog</h1>
        <input type="text" name='title' placeholder='blog title' onChange={change} value={blog.title}/>
        <textarea name="content" id="content" placeholder='write a blog' onChange={change} value={blog.content}></textarea>
        <button onClick={submit}>submit</button>
    </div>
  )
}

export default CreateBlog