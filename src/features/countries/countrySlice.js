import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCountries } from "./countryAPI";

const initialState = {
    countries: [],
    isLoading: false,
    isError: false,
    error: ''
};

export const getCountry = createAsyncThunk("countries/getCountry", async () => {
    const countries = fetchCountries();
    return countries;
})

const countrySlice = createSlice({
    name: "countries",
    initialState,
    //reducers are functions that take the current state and an action object, and then return a new state value.
    extraReducers: (builder) => {
        //builder is a callback API that provides a fluent interface for declaring reducer functions with correct action type. It addCases is like switch case statement, when the action type matches, it will execute the callback function getCountry().
        builder.addCase(getCountry.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
        })
            .addCase(getCountry.fulfilled, (state, action) => {
                state.countries = action.payload;
                state.isLoading = false;
            })
            .addCase(getCountry.rejected, (state, action) => {
                state.countries = [];
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })
    }
});

export default countrySlice.reducer;