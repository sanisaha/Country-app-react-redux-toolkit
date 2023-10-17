import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (<div className="d-flex justify-content-center align-items-center">
            <div>
                <h1>Loading...</h1>
            </div>
        </div>)
    }
    if (!user) {
        //return to login page if user is not logged in, state is used to redirect to the page from where user is redirected to login page
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
    }
    return children;

};

export default PrivateRoutes;