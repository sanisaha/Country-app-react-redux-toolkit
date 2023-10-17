import { configureStore } from '@reduxjs/toolkit';
import countrySlice from '../features/countries/countrySlice';
import favouritesSlice from '../features/favourites/favouritesSlice';


export const store = configureStore({
  reducer: {
    countries: countrySlice,
    favourites: favouritesSlice,
  },
  //getDefaultMiddleware() returns an array of middleware that is included by default.
  //We can add more middleware to this array by calling concat() on the array and passing in the new middleware.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat()
});

export default store;
