import React,{useState, useEffect} from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import axios from 'axios';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const sendData = (e) => {
        e.preventDefault();
        if(email === '') return setError('Email is empty');
        if(password === '') return setError('Password is empty');
        if(confirmPassword === '') return setError('Confirm password is empty');
        else if (confirmPassword !== password) return setError('Password and confirmation password are not the same !')
        
        setError('');
        axios
        .post('http://snapi.epitech.eu/inscription',{
                email: email,
                password: password
        })
        .then(response => {            
            alert('Successfuly registered !')
        })
        .catch((error) => {
            setError('Email already taken');
            console.log(error);
        })
        
    }

    return(

        <div >
            <Container>
                <Form className='mt-5' onSubmit={sendData} >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                        <p className='text-danger ml-1'>{error === 'Email is empty' || error === 'Email already taken'? error : null}</p>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"  name='password' onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                        <p className='text-danger ml-1'>{error === 'Password is empty' ? error : null}</p>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)} />
                    </Form.Group>
                        <p className='text-danger ml-1'>{error === 'Confirm password is empty' || error === 'Password and confirmation password are not the same !' ? error : null}</p>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )

}

export default Register;