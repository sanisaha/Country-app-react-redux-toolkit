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
    extraReducers: (builder) => {
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