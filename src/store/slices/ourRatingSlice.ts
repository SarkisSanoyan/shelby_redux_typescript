import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOurRating } from '../../models';


interface OurRatingState {
    loading: boolean;
    error: string;
    ourRating: IOurRating[];
}

const initialState: OurRatingState = {
    loading: false,
    error: "",
    ourRating: []
}

export const ourRatingSlice = createSlice({
    name: 'ourRating',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchingWithSuccess(state, action: PayloadAction<IOurRating[]>) {
            state.loading = false;
            state.error = "";
            state.ourRating = action.payload;
        },
        fetchingWithError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
})

export default ourRatingSlice.reducer