import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
   <div>

        <header>

          <nav className='navbar navbar-expand-lg navbar-dark bg-warning p-3'>
            <div className='container-fluid'>
              <h3 className='navbar-brand fs-3'> <Link to='/'>Donator</Link> </h3>
            </div>
            
            <ul className='navbar-nav'>
              <li className='nav-item me-3 py-2 fs-5'><Link>Home</Link> </li>
              <li className='nav-item me-3 py-2 fs-5'><Link to='/story-new'>New</Link> </li>
              <li className='nav-item me-3 py-2 fs-5 '><Link>Waht</Link></li>
            </ul>
          </nav>
        </header>
   </div>
        

  )
}

export default Header