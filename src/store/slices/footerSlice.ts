import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFooter } from '../../models';


interface FooterState {
    loading: boolean;
    error: string;
    footer: IFooter[];
}

const initialState: FooterState = {
    loading: false,
    error: "",
    footer: []
}

export const footerSlice = createSlice({
    name: 'footer',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchingWithSuccess(state, action: PayloadAction<IFooter[]>) {
            state.loading = false;
            state.error = "";
            state.footer = action.payload;
        },
        fetchingWithError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
})

export default footerSlice.reducer