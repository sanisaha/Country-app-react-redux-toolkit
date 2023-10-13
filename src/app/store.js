import { configureStore } from '@reduxjs/toolkit';
import countrySlice from '../features/countries/countrySlice';
import favouritesSlice from '../features/favourites/favouritesSlice';


export const store = configureStore({
  reducer: {
    countries: countrySlice,
    favourites: favouritesSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat()
});

export default store;
