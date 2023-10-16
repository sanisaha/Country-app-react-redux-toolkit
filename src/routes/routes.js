import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Country from "../pages/Country";
import Favourites from "../pages/Favourites";
import SingleCountry from "../components/SingleCountry";
import Login from "../credentials/Login";
import Register from "../credentials/Register";
import PrivateRoutes from "./PrivateRoutes";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/countries',
                element: <Country />
            }
            ,
            {
                path: '/favourites',
                element: <PrivateRoutes><Favourites /></PrivateRoutes>
            }
            ,
            {
                path: '/countries/:single',
                element: <SingleCountry />
            }
            ,
            {
                path: '/login',
                element: <Login />
            }
            ,
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
]);

export default routes;