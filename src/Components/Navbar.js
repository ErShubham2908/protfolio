import React from 'react'
import Home from './Home'
import Project from './Project'
import Skill from './Skill'
import About from './About'
import Contact from './Contact'
import './Style.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

function Navbar() {
  return (
    <>
     <BrowserRouter>
        <div className='pHead' >
            <div className='pName'>
                <span>S</span><span>hubham</span> 
                <span>K</span><span>umar</span>
            </div>
            <div className='navbar'>
                <NavLink className='navlink'  to='/' >HOME</NavLink>
                <NavLink className='navlink' to='/project' >PROJECT</NavLink>
                <NavLink className='navlink' to='/skill' >SKILL</NavLink>
                <NavLink className='navlink' to='/about' >ABOUT</NavLink>
                <NavLink className='navlink' to='/contact' >CONTACT</NavLink>
            </div>
        </div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project' element={<Project />} />
            <Route path='/skill' element={<Skill />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={ <Contact /> } />
        </Routes>
     </BrowserRouter> 
    </>
  )
}

export default Navbar
