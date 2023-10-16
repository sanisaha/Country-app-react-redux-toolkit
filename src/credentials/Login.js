import React, { useContext, useState } from 'react';
import { Button, FormControl, FormGroup, Row, FormLabel } from 'react-bootstrap';
import { AuthContext } from '../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const { logIn, providerLogin, setLoading } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const handleLogIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                setLoading(false);
                navigate('/');
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
                event.target.reset();
            })
    }
    const handleSocialSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate('/');
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="Login">
            <Row>
                <form onSubmit={handleLogIn}>
                    <FormGroup controlId="email">
                        <FormLabel>Email</FormLabel>
                        <FormControl type="text" name="email" placeholder="Enter your email" />
                    </FormGroup>
                    <FormGroup controlId="password">
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" name="password" placeholder="Enter your password" />
                    </FormGroup>
                    <Button type="submit" bg="primary">Sign-In</Button>
                    <Button onClick={handleSocialSignIn} type="submit" bg="primary">Google Login</Button>
                </form>
                <div>
                    <label className="label">
                        <p>Dont't have an account? <Link to='/register' className='text-warning'>register</Link></p>
                    </label>
                </div>
                <div className='text-center'>
                    <p className='text-danger'>{error}</p>
                </div>
            </Row>
        </div>
    );
};

export default Login;