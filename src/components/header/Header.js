import { Button } from '@mui/material';
import React from 'react';
import Nav from '../Navbar/Nav';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            {/* <h1>I am from header</h1>  */}
            <Nav></Nav>
            {/* <Button variant="contained">Hello World</Button>  */}
        </div>
    );
};

export default Header;