//here we are fetching data from the backend and sending it to the frontend, we used axios to fetch the data and we have set up axios.config.js to set up the base url for the backend
import axios from "../../utils/axios.config";

export const fetchFavouriteCountries = async (user) => {
    const data = await axios.get(`/favourites/${user}`);
    return data.data;
}

export const postFavouriteCountries = async (countryData) => {
    await axios.post('/addfavourite', countryData);
}

export const deleteFavouriteCountries = async (email, data) => {
    await axios.delete(`/deleteonecountry/param1=${email}&param2=${data}`);
}

export const deleteAllFavouriteCountries = async (email) => {
    await axios.delete(`/deleteallcountry/${email}`);
}