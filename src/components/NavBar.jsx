import { NavLink } from "react-router-dom";
import './styles/NavBar.css'

function NavBar () {
  
  return(
    <nav className="navbar">
    <NavLink className='nav-bar-link' to='/home'>Home</NavLink>
    <NavLink className='nav-bar-link' to='/home'>option1</NavLink>
    <NavLink className='nav-bar-link' to='/home'>option2</NavLink>
    <NavLink className='nav-bar-link' to='/home'>option3</NavLink>
    <NavLink className='nav-bar-link' to='/home'>option4</NavLink>
    </nav>
  )
  }

  export default NavBar