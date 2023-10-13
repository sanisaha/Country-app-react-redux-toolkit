import React, { useContext } from 'react';
import { Button, FormControl, FormGroup, Row, FormLabel } from 'react-bootstrap';
import { AuthContext } from '../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { logIn, providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleLogIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleSocialSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
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
            </Row>
        </div>
    );
};

export default Login;