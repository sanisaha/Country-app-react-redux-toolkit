import React, { useContext, useState } from 'react';
import { Button, FormControl, FormGroup, Row, FormLabel } from 'react-bootstrap';
import { AuthContext } from '../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { createNewUser, logOut } = useContext(AuthContext);
    const handleUserCreate = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        createNewUser(email, password)
            .then(result => {
                logOut();
                const user = result.user;

            })
            .catch(error => {
                document.getElementById('error').innerHTML = error.message;
            })

    }

    return (
        <div className="Login">
            <Row>
                <form onSubmit={handleUserCreate}>
                    <FormGroup controlId="name">
                        <FormLabel>Name</FormLabel>
                        <FormControl type="text" name="name" placeholder="Enter your Name" />
                    </FormGroup>
                    <FormGroup controlId="email">
                        <FormLabel>Email</FormLabel>
                        <FormControl type="email" name="email" placeholder="Enter your email" />
                    </FormGroup>
                    <FormGroup controlId="password">
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" name="password" placeholder="Enter your password" />
                    </FormGroup>
                    <Button type="submit" bg="primary">Register</Button>
                </form>
            </Row>
        </div>
    );
};

export default Register;