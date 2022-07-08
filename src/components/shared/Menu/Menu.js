import React from 'react'
import {Link} from 'react-router-dom';
const Menu = () => {
  return (
    <>
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link " to="/contacts" >Contacts</Link>
            </li>
        </ul>
    </>
    
    )
}

export default Menu