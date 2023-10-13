import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry } from '../features/countries/countrySlice';
import { Link } from 'react-router-dom';

const Home = () => {
    const countries = useSelector(state => state.countries);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountry());
    }, [dispatch]);
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
        </div>
    );
};

export default Home;