import React,{useState, useEffect} from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import store from '../../store';



const NavBar = (isLogged) => {

    const logOut = () => {
        localStorage.removeItem('data');
    }

    return(
        <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                {store.getState().auth['logged']
                    ?   <Nav.Link href="snap">Snap</Nav.Link> 
                    :   null 
                }
                {store.getState().auth['logged']
                    ?   <Nav.Link href="Logout" onClick={logOut}>Logout</Nav.Link> 
                    :   <div style={{display:'flex'}}>
                            <Nav.Link href="Connection">Login</Nav.Link>
                            <Nav.Link href="Register">Register</Nav.Link> 
                        </div>
                }
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        </div>
    )

}

export default NavBar;