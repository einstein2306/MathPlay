import { useState } from 'react'
import Addition from './components/Addition.jsx'
import Subtraction from './components/Subtraction.jsx'
import Multiplication from './components/Multiplication.jsx'
import {Routes, Route, NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'


function App() {

  return (
    <div> 
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark text-white'>
        <div className='container-fluid'>
          <NavLink className='navbar-brand'  to ='#'>
            Math Play
          </NavLink>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className="navbar-nav ms-auto">
            <li className='nav-item'>
              <NavLink className={({isActive}) => isActive ? "nav-link nav-active" : "nav-link"}  to ='/'>
                Addition
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={({isActive}) => isActive ? "nav-link nav-active" : "nav-link"}  to ='/subtraction'>
                Subtraction
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={({isActive}) => isActive ? "nav-link nav-active" : "nav-link"}  to ='/multiplication'>
                Multiplication
              </NavLink>
            </li>
          </ul>
          </div>
         </div>
      </nav>
      <div>
          <Routes>
            <Route path='/' element={<Addition/>}></Route>
            <Route path='/subtraction' element={<Subtraction/>}></Route>
            <Route path='/multiplication' element={<Multiplication/>}></Route>
          </Routes>  
      </div>
    </div>
    
  );
}

export default App
