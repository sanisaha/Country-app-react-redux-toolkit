import { configureStore } from '@reduxjs/toolkit';
import countrySlice from '../features/countries/countrySlice';


export const store = configureStore({
  reducer: {
    countries: countrySlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat()
});

export default store;
