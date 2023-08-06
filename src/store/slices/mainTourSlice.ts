import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMainTour } from '../../models';


interface MainTourState {
    loading: boolean;
    error: string;
    mainTours: IMainTour[];
}

const initialState: MainTourState = {
    loading: false,
    error: "",
    mainTours: []
}

export const mainTourSlice = createSlice({
    name: 'mainTours',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchingWithSuccess(state, action: PayloadAction<IMainTour[]>) {
            state.loading = false;
            state.error = "";
            state.mainTours = action.payload;
        },
        fetchingWithError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
})

export default mainTourSlice.reducer