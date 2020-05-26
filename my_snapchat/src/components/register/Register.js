import React,{useState, useEffect} from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import axios from 'axios';




const Register = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error,setError] = useState('');

    // setTest()

    // useEffect( () => {

    // },[*variableChanging*])

    const sendData = (e) => {
        e.preventDefault();
        if( email != '' && password != '' && password == confirmPassword){
            alert('sent');
            axios
            .post('http://snapi.epitech.eu/inscription',{
                    email: email,
                    password: password
            })
            .then(response => {
                console.log(response.data);
            })
            .catch((error) => {
                setError('Email deja pris');
                console.log(error);
            })
        }
    }

    return(

        <div >
            <Container>
                <Form className='mt-5' onSubmit={sendData} >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <p>{error}</p>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"  name='password' onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)} />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )

}

export default Register;