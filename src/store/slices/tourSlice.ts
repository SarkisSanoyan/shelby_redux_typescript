import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITour } from '../../models';


interface TourState {
    loading: boolean;
    error: string;
    tours: ITour[];
}

const initialState: TourState = {
    loading: false,
    error: "",
    tours: []
}

export const tourSlice = createSlice({
    name: 'tour',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchingWithSuccess(state, action: PayloadAction<ITour[]>) {
            state.loading = false;
            state.error = "";
            state.tours = action.payload;
        },
        fetchingWithError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
})

export default tourSlice.reducer