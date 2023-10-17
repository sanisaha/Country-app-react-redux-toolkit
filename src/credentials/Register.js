import React, { useContext, useState } from 'react';
import { Button, FormControl, FormGroup, Row, FormLabel, Container } from 'react-bootstrap';
import { AuthContext } from '../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { createNewUser, setLoading } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleUserCreate = (event) => {

        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;

        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setLoading(false);
                navigate('/');

            })
            .catch(error => {
                setError(error.message);
                event.target.reset();
            })

    }

    return (
        <div className='bg-primary min-vh-100'>
            <Container>
                <Row>
                    <div className='col-lg-6 mx-auto pt-5 text-white'>
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
                            <div className='p-2'>
                                <Button className='bg-success' type="submit">Register</Button>
                            </div>
                        </form>
                        <div className='text-center'>
                            <p className='text-danger'>{error}</p>
                        </div>
                    </div>
                </Row>
            </Container >
        </div>
    );
};

export default Register;