import React from 'react'
import Menu from '../Menu/Menu'
import './Footer.css'
const Footer = (props) => {

    let name = "Abnit Chauhan";
  return (

    <>
    <hr />
    <footer className='text-center'>
        <Menu />
    <p className='copyright'>&copy; Copyright @ {props.year} | {name}</p>
         </footer>
    </>
  )
}

export default Footer