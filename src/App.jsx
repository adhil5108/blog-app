import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import CreateBlog from './components/CreateBlog.jsx'
import Home from './components/Home.jsx'

function App() {



return (
<>
<Navbar/>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/create' element={<CreateBlog/> }/>
</Routes>


</>
)
}

export default App
