import React,{ useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import './NavMenu.css'

const NavMenu=()=>{
    
   return (
    <nav className="navbar">
        <div  id='nav-header'>
          <Link to="/" className="navbar-brand nav-text" id='brand-icon-link'>
            <span id='brand-icon'> Y</span>
          </Link>
          <Link to="/" className="navbar-brand nav-text">
           <span id='brand-name'><strong>Hacker News</strong></span> 
          </Link>
          <Link to="/new-stories" className="navbar-link nav-text">
            <span className='nav-link-text'>new </span>
          </Link>
          <span className="nav-lnk-divider"> | </span>
          <Link to="/uncreated-routes" className="navbar-link nav-text" id='brand-icon-link'>
            <span className='nav-link-text'> past</span>
          </Link>
          <span className="nav-lnk-divider"> | </span>
          <Link to="/uncreated-routes" className="navbar-link nav-text" id='brand-icon-link'>
            <span className='nav-link-text'> comments</span>
          </Link>
          <span className="nav-lnk-divider"> | </span>
          <Link to="/uncreated-routes" className="navbar-link nav-text" id='brand-icon-link'>
            <span className='nav-link-text'> ask</span>
          </Link>
          <span className="nav-lnk-divider"> | </span>
          <Link to="/uncreated-routes" className="navbar-link nav-text" id='brand-icon-link'>
            <span className='nav-link-text'> show</span>
          </Link>
          <span className="nav-lnk-divider"> | </span>
          <Link to="/uncreated-routes" className="navbar-link nav-text" id='brand-icon-link'>
            <span className='nav-link-text'>jobs</span>
          </Link>
          <span className="nav-lnk-divider"> | </span>
          <Link to="/uncreated-routes" className="navbar-link nav-text" id='brand-icon-link'>
            <span className='nav-link-text'>submit</span>
          </Link>
        </div>
        <div id='nav-auth-link'>
        <Link to="/uncreated-routes" className="navbar-link nav-text" >
            <span className='nav-link-text'>login</span>
          </Link>
          </div>
    </nav>
   )
}


export default NavMenu
