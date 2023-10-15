import axios from "../../utils/axios.config";
export const fetchFavouriteCountries = async (user) => {
    const data = await axios.get(`/favourites/${user}`);
    return data.data;
}
export const postFavouriteCountries = async (countryData) => {
    await axios.post('/addfavourite', countryData);
}