import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHeader } from '../../models';


interface HeaderState {
    loading: boolean;
    error: string;
    header: IHeader[];
}

const initialState: HeaderState = {
    loading: false,
    error: "",
    header: []
}

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchingWithSuccess(state, action: PayloadAction<IHeader[]>) {
            state.loading = false;
            state.error = "";
            state.header = action.payload;
        },
        fetchingWithError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
}) 

export default headerSlice.reducer