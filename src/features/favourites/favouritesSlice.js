import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteAllFavouriteCountries, deleteFavouriteCountries, fetchFavouriteCountries, postFavouriteCountries } from './favouritesAPI';


const initialState = {
    isLoading: false,
    isError: false,
    postSuccess: false,
    deleteSuccess: false,
    error: '',
    favouriteCountry: [],
};

export const getFavouriteCountry = createAsyncThunk("favouriteCountry/getFavouritesCountry", async (user) => {
    const data = fetchFavouriteCountries(user?.email);
    return data;
})
export const addFavouriteCountry = createAsyncThunk("favouriteCountry/addFavouritesCountry", async (countryData) => {
    const data = postFavouriteCountries(countryData);
    return data;
})
export const deleteFavouriteCountry = createAsyncThunk("favouriteCountry/deleteFavouritesCountry", async (countryData, thunkAPI) => {
    const data = deleteFavouriteCountries(countryData.userEmail, countryData.data);
    thunkAPI.dispatch(removeFavouriteCountry(countryData.data));
    return data;
})
export const deleteAllFavouriteCountry = createAsyncThunk("favouriteCountry/deleteAllFavouritesCountry", async (user, thunkAPI) => {
    const data = deleteAllFavouriteCountries(user.userEmail);
    thunkAPI.dispatch(removeAllFavouriteCountry());
    return data;
})


const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        togglepostSuccess: (state, action) => {
            state.postSuccess = !state.postSuccess
        },
        removeFavouriteCountry: (state, action) => {
            state.favouriteCountry = state.favouriteCountry.filter(item => item !== action.payload)
        },
        removeAllFavouriteCountry: (state) => {
            state.favouriteCountry = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getFavouriteCountry.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
            .addCase(getFavouriteCountry.fulfilled, (state, action) => {
                state.favouriteCountry = action.payload;
                state.isLoading = false;
            })
            .addCase(getFavouriteCountry.rejected, (state, action) => {
                state.favouriteCountry = [];
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })
            .addCase(addFavouriteCountry.pending, (state) => {
                state.isLoading = true;
                state.postSuccess = false;
                state.isError = false;
            })
            .addCase(addFavouriteCountry.fulfilled, (state) => {
                state.postSuccess = true;
                state.isLoading = false;
            })
            .addCase(addFavouriteCountry.rejected, (state, action) => {
                state.isLoading = false;
                state.postSuccess = false;
                state.isError = true;
                state.error = action.error.message;
            })
            .addCase(deleteFavouriteCountry.pending, (state) => {
                state.isLoading = true;
                state.deleteSuccess = false;
                state.isError = false;
            })
            .addCase(deleteFavouriteCountry.fulfilled, (state) => {
                state.deleteSuccess = true;
                state.isLoading = false;
            })
            .addCase(deleteFavouriteCountry.rejected, (state, action) => {
                state.isLoading = false;
                state.deleteSuccess = false;
                state.isError = true;
                state.error = action.error.message;
            })
            .addCase(deleteAllFavouriteCountry.pending, (state) => {
                state.isLoading = true;
                state.deleteSuccess = false;
                state.isError = false;
            })
            .addCase(deleteAllFavouriteCountry.fulfilled, (state) => {
                state.deleteSuccess = true;
                state.isLoading = false;
            })
            .addCase(deleteAllFavouriteCountry.rejected, (state, action) => {
                state.isLoading = false;
                state.deleteSuccess = false;
                state.isError = true;
                state.error = action.error.message;
            })
    }
});

export const { togglepostSuccess, removeFavouriteCountry, removeAllFavouriteCountry } = favouritesSlice.actions

export default favouritesSlice.reducer