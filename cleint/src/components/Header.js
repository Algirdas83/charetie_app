import React from 'react'
import './Header.css'
import { Link,} from 'react-router-dom'
import { useContext, useEffect } from 'react'
import MainContext from '../context/MainContext.js'
import axios from 'axios'


const Header = () => {


   const {userData} = useContext(MainContext)
console.log(userData);
  

  return (
   <div>

        <header>

          <nav className='navbar navbar-expand-lg navbar-dark bg-warning p-3'>
            <div className='container-fluid'>
              <h3 className='navbar-brand fs-3'> <Link to='/'>Donator</Link> </h3>
            </div>
            
            <ul className='navbar-nav'>
              <li className='nav-item me-3 py-2 fs-5'><Link to='/'>Home</Link> </li>

                {userData.id ?   
                  <>
                  <li className='nav-item me-3 py-2 fs-5'><Link to='/logout'>Atsijunkti</Link> </li>
                  <li className='nav-item me-3 py-2 fs-5'><Link to='/story-new'>New</Link> </li> 
                  </>
                 :
                  <>
                  <li className='nav-item me-3 py-2 fs-5'><Link to='/login'>Prisijungti</Link> </li>
                  <li className='nav-item me-3 py-2 fs-5'><Link to='/register'>Registruotis</Link> </li>
                  </>
                 
                }
             
              
              
            
            </ul>
          </nav>
        </header>
   </div>
        

  )
}

export default Header