import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHotTour } from '../../models';


interface HotTourState {
    loading: boolean;
    error: string;
    hotTours: IHotTour[];
}

const initialState: HotTourState = {
    loading: false,
    error: "",
    hotTours: []
}

export const hotTourSlice = createSlice({
    name: 'hotTours',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchingWithSuccess(state, action: PayloadAction<IHotTour[]>) {
            state.loading = false;
            state.error = "";
            state.hotTours = action.payload;
        },
        fetchingWithError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
})

export default hotTourSlice.reducer