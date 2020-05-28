import React,{useState, useEffect} from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import SendImage from '../sendimage/SendImage';

const HomePage = () => {
    return(

        <div >
            <Container>
                <SendImage />
            <p>Homepage</p>
            </Container>
        </div>
    )

}

export default HomePage;