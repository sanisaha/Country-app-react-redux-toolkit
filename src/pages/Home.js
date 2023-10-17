import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

function Home() {
    const { user } = useContext(AuthContext);
    return (
        <Container>
            {/* here we are using react-bootstrap carousel component to show carousel in our home page, we are using carousel to show the images in our home page */}
            <Carousel>
                <Carousel.Item>
                    <div className='text-center min-vh-100 d-flex justify-content-center align-items-center' style={{
                        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661962646245-5ec5dd3d0bcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291bnRyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}>
                        <h1 className='text-center text-white'>Welcome to Country App</h1>
                    </div>
                    <Carousel.Caption>
                        <Link className='text-white' to='/countries'>Browse Countries</Link>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='text-center min-vh-100 d-flex justify-content-center align-items-center' style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1530257543896-1e0d096c7157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvdW50cnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}>
                        <h1 className='text-center text-white'>Save Your Favourite Countries With A Click</h1>
                    </div>
                    <Carousel.Caption>
                        {/* here we are checking if user is logged in or not, if user is logged in then browse favourite will show in carousel else login now will be shown */}
                        {user ?
                            <Link className='text-white' to='/favourites'>Browse Favourites</Link> :
                            <Link className='text-white' to='/login'>Login Now</Link>}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='text-center min-vh-100 d-flex justify-content-center align-items-center' style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1500076898857-ad1ff4074429?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvdW50cnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}>
                        <h1 className='text-center text-white'>Always updated with your Home country</h1>
                    </div>

                    <Carousel.Caption>
                        {user ?
                            <Link className='text-white' to='/favourites'>Browse Favourites</Link> :
                            <Link className='text-white' to='/login'>Login Now</Link>}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </Container>
    );
}

export default Home;