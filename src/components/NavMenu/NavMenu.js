import { NavLink } from "react-router-dom";
import './NavMenu.css'

const NavMenu=()=>{
    
   return (
    <nav className="navbar">
        <div  id='nav-header'>
          <NavLink to="/" className="navbar-brand nav-text" id='brand-icon-link'>
            <span id='brand-icon'> Y</span>
          </NavLink>
          <NavLink to="/" className="navbar-brand nav-text">
           <span id='brand-name'><strong>Hacker News</strong></span> 
          </NavLink>
          <NavLink to="/new-stories" activeStyle={{ color: 'white' }} className="navbar-link nav-text">
            <span className='nav-link-text'>new </span>
          </NavLink>
          <span className="nav-lnk-divider"> | </span>
          <NavLink to="/uncreated-routes"  className="navbar-link nav-text" id='brand-icon-link'>
            <span className='nav-link-text'> past</span>
          </NavLink>
          <span className="nav-lnk-divider"> | </span>
          <NavLink to="/uncreated-routes"  className="navbar-link nav-text" id='brand-icon-link'>
            <span className='nav-link-text'> comments</span>
          </NavLink>
          <span className="nav-lnk-divider"> | </span>
          <NavLink to="/uncreated-routes" className="navbar-link nav-text" id='brand-icon-link'>
            <span className='nav-link-text'> ask</span>
          </NavLink>
          <span className="nav-lnk-divider"> | </span>
          <NavLink to="/uncreated-routes"  className="navbar-link nav-text" id='brand-icon-link'>
            <span className='nav-link-text'> show</span>
          </NavLink>
          <span className="nav-lnk-divider"> | </span>
          <NavLink to="/uncreated-routes"  className="navbar-link nav-text" id='brand-icon-link'>
            <span className='nav-link-text'>jobs</span>
          </NavLink>
          <span className="nav-lnk-divider"> | </span>
          <NavLink to="/uncreated-routes"  className="navbar-link nav-text" id='brand-icon-link'>
            <span className='nav-link-text'>submit</span>
          </NavLink>
        </div>
        <div id='nav-auth-link'>
        <NavLink to="/uncreated-routes"  className="navbar-link nav-text" >
            <span className='nav-link-text'>login</span>
          </NavLink>
          </div>
    </nav>
   )
}


export default NavMenu
