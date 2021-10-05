import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Files/logo.png';
import Home from '../Home/Home';
import "./Nav.css"

const Nav = () => {
   const activeStyle={
        // borderBottom: "3px solid #0000",
        borderBottom: "3px solid #717cff",
        color: "red"
      }
    return (
        <div className="link">
           <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
           {/* <NavLink to="/home" activeStyle={activeStyle}>Home</NavLink> */}
           <NavLink to="/aboutus" activeStyle={activeStyle}>About Us</NavLink>
           <NavLink to="/services" activeStyle={activeStyle}>Students</NavLink>
           {/* <NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink> */}
        </div>
    );
};

export default Nav;