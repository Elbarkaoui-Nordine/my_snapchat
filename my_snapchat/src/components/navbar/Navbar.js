import React,{useState, useEffect} from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import store from '../../store';
import './style.css';



const NavBar = (isLogged) => {

    const logOut = () => {
        localStorage.removeItem('data');
    }

    return(
        <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand className='ml-2' href="/home">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                {store.getState().auth['logged']
                    ?   <Nav.Link href="snap">Snap</Nav.Link> 
                    :   null 
                }
                {store.getState().auth['logged']
                    ?   <Nav.Link href="/"  onClick={logOut}>Logout</Nav.Link> 
                    :   <div id='logButtons'>
                            <Nav.Link href="connection">Login</Nav.Link>
                            <Nav.Link href="register">Register</Nav.Link> 
                        </div>
                }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    )

}

export default NavBar;