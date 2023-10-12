import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry } from '../features/countries/countrySlice';

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
        </div>
    );
};

export default Home;