import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPopularTour } from '../../models';


interface PopularTourState {
    loading: boolean;
    error: string;
    popularTours: IPopularTour[];
}

const initialState: PopularTourState = {
    loading: false,
    error: "",
    popularTours: []
}

export const popularTourSlice = createSlice({
    name: 'popularTours',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchingWithSuccess(state, action: PayloadAction<IPopularTour[]>) {
            state.loading = false;
            state.error = "";
            state.popularTours = action.payload;
        },
        fetchingWithError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
})

export default popularTourSlice.reducer