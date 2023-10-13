import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry } from '../features/countries/countrySlice';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Home = () => {
    const { user, logOut } = useContext(AuthContext);
    const countries = useSelector(state => state.countries);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountry());
    }, [dispatch]);
    const handleLogOut = () => {
        logOut();
    }

    return (
        <div>
            {countries.isLoading && <h1>Loading...</h1>}
            <div>
                <h1>This is home</h1>
            </div>
            <div>
                <Link to='/countries'>All Country</Link>
            </div>
            <Link to='/favourites'>Favourites Country</Link>
            <div>
                <Link to='/login'>Login</Link>
            </div>
            <Link to='/register'>Register</Link>
            {user && <div>
                <button onClick={handleLogOut}>Log Out</button>
            </div>}
        </div>
    );
};

export default Home;