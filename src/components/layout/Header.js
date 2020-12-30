import React from 'react'
import {Link } from 'react-router-dom'
import Logo from '../image/mustaf1.jpg'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function Header(){
    return (
      <React.Fragment>
       <header style={headerStyle}>
         <img src={Logo} style={logoStyle} />
         
         <h1>Mustaf Services</h1>
         <Link style={linkStyle} to='/'> Home </Link> * 
         <Link style={linkStyle} to='/about'> About </Link> *
         {/* <Link style={linkStyle} to='/film'> Movie </Link> * */}
         <Link style={linkStyle} to="/contact"> Contact </Link>
       </header>

  
      

       </React.Fragment>
           
     
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'  
}
 const linkStyle = {
   color: '#fff',
   textDecoration:'none'
 }

 const logoStyle ={
   width: 70,
   height: 70,
   borderRadius: '50%',
   float: 'right'
 }

export default Header
