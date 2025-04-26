import React from "react";
import './Navbar.css'
import searchIcon from "../assets/icons8-search-50.png";
import {Link} from 'react-router-dom'

const Navbar = ()=>{
    return(
        <div className = 'navbar'>
           {/* <img src = "" alt=" " className='logo'/> */}
           <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/create">Create</Link></li>
            <li>About</li>
           </ul>
        <div className='search-box'>
            <input type= "text" placeholder="Search"/>
            <img src={searchIcon} alt= ""/>
        </div>

    </div>
    )
}

export default Navbar