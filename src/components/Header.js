import React, { useContext } from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut();
    }
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Country-App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">

                    <Nav>
                        <Link className='px-2 text-decoration-none' to='/'>Home</Link>
                        <Link className='px-2 text-decoration-none' to='/countries'>Countries</Link>
                        <Link className='px-2 text-decoration-none' to='/favourites'>Favourites</Link>
                        {user ? <Link className='px-2 text-decoration-none' onClick={handleLogOut}>logout</Link>
                            :
                            <>
                                <Link className='px-2 text-decoration-none' to='/login'>login</Link>
                                <Link className='px-2 text-decoration-none' to='/register'>register</Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;