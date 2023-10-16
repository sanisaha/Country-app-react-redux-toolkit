import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry } from '../features/countries/countrySlice';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { getFavouriteCountry } from '../features/favourites/favouritesSlice';

const Home = () => {
    return (

        <div>
            <h1>This is home</h1>
        </div>

    );
};

export default Home;