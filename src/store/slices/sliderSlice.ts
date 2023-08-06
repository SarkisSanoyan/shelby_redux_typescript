import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISlider } from '../../models';


interface SliderState {
    loading: boolean;
    error: string;
    slider: ISlider[];
}

const initialState: SliderState = {
    loading: false,
    error: "",
    slider: []
}

export const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchingWithSuccess(state, action: PayloadAction<ISlider[]>) {
            state.loading = false;
            state.error = "";
            state.slider = action.payload;
        },
        fetchingWithError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
})

export default sliderSlice.reducer