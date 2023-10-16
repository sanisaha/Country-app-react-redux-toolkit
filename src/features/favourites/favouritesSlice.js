import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteFavouriteCountries, fetchFavouriteCountries, postFavouriteCountries } from './favouritesAPI';


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
export const deleteFavouriteCountry = createAsyncThunk("favouriteCountry/deleteFavouritesCountry", async (countryData) => {
    const data = deleteFavouriteCountries(countryData.userEmail, countryData.data);
    return data;
})


const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addFavourite: (state, action) => {

        },
        togglepostSuccess: (state, action) => {
            state.postSuccess = !state.postSuccess
        },
        removeFavourite: (state, action) => {
            const newArray = [...state.favourites]
            newArray.splice(newArray.findIndex(e => e === action.payload), 1)
            state.favourites = [...newArray]
        },
        clearFavourites: (state, action) => {
            localStorage.removeItem('favourites')
            state.favourites = []
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
    }
});

export const { addFavourite, removeFavourite, clearFavourites, togglepostSuccess } = favouritesSlice.actions

export default favouritesSlice.reducer