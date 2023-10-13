import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Country from "../pages/Country";
import Favourites from "../pages/Favourites";
import SingleCountry from "../components/SingleCountry";



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
                element: <Favourites />
            }
            ,
            {
                path: '/countries/:single',
                element: <SingleCountry />
            }
        ]
    }
]);

export default routes;