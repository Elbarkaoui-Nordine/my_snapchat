import React,{useState, useEffect} from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import store from '../../store';
import SendImage from '../sendimage/SendImage';

const  HomePage = () => {


    // setTest()

    // useEffect(() => {
    //     if (error !== '')
    //     {
    //         alert(error);
    //         setError('');
    //     }   
    // }, [error])


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