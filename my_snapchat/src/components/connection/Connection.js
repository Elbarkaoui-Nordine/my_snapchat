import React,{useState, useEffect} from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import store from '../../store';

const Connection = (logged) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // setTest()

    // useEffect(() => {
    //     if (error !== '')
    //     {
    //         alert(error);
    //         setError('');
    //     }   
    // }, [error])
    console.log(logged);
    const sendData = (e) => {
        e.preventDefault();
        if(email === '') return setError('Email is empty');
        if(password === '') return setError('Password is empty');
      
        setError('');
        axios
        .post('http://snapi.epitech.eu/connection', {
                email: email,
                password: password
        })
        .then(response => {
            var user = response.data;
            store.dispatch({type: 'login_success', user: user});
            var token = JSON.stringify(user.data);
            localStorage.setItem('data', token);
        })
        .catch((error) => {
            store.dispatch({type: 'login_fail'});
            setError('Email or password is incorrect');
            console.log(error);
        })
        
    }

    return(

        <div >
            <Container>
                <Form className='mt-5' onSubmit={sendData} >
                <p className='text-danger ml-1'>{error === 'Email or password is incorrect' ? error : null}</p>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                        <p className='text-danger ml-1'>{error === 'Email is empty' ? error : null}</p>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"  name='password' onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                        <p className='text-danger ml-1'>{error === 'Password is empty' ? error : null}</p>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )

}

export default Connection;