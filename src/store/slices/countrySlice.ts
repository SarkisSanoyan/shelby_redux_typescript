import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICountry } from '../../models';


interface CountryState {
    loading: boolean;
    error: string;
    countries: ICountry[];
}

const initialState: CountryState = {
    loading: false,
    error: "",
    countries: []
}

export const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchingWithSuccess(state, action: PayloadAction<ICountry[]>) {
            state.loading = false;
            state.error = "";
            state.countries = action.payload;
        },
        fetchingWithError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
}) 

export default countrySlice.reducer