import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='navBar'>
        <h1 className='nameApplication'>HRnet</h1>
         <Link className='link_viewEmployee' to={'/employee'}>View Current Employees</Link>
    </div>
  )
}

export default NavBar