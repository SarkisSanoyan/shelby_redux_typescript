import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITour } from '../../models';


interface TourDetailState {
    loading: boolean;
    error: string;
    tour: ITour;
}

const initialState: TourDetailState = {
    loading: false,
    error: "",
    tour: {
        name: "",
        country: "",
        hotel: "",
        transport_depart: "",
        transport_arrive: "",
        searchResult: {}
    }
}

export const tourDetailSlice = createSlice({
    name: 'tourDetail',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchingWithSuccess(state, action: PayloadAction<ITour>) {
            state.loading = false;
            state.error = "";
            state.tour = action.payload;
        },
        fetchingWithError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
})

export default tourDetailSlice.reducer