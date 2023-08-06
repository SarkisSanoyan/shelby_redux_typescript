import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrder } from '../../models';


interface OrderState {
    loading: boolean;
    error: string;
    order: IOrder[];
}

const initialState: OrderState = {
    loading: false,
    error: "",
    order: []
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchingWithSuccess(state, action: PayloadAction<IOrder[]>) {
            state.loading = false;
            state.error = "";
            state.order = action.payload;
        },
        fetchingWithError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
})

export default orderSlice.reducer