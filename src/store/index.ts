import { configureStore } from '@reduxjs/toolkit';

import headerReducer from "./slices/headerSlice";
import countriesReducer from "./slices/countrySlice";
import toursReducer from "./slices/tourSlice";
import tourDetailReducer from "./slices/tourDetailSlice";
import sliderReducer from "./slices/sliderSlice";
import hotToursReducer from "./slices/hotTourSlice";
import ourRatingReducer from "./slices/ourRatingSlice";
import mainToursReducer from "./slices/mainTourSlice";
import popularToursReducer from "./slices/popularTourSlice";
import footerReducer from "./slices/footerSlice";
import orderReducer from "./slices/orderSlice";

export const store = configureStore({
    reducer: {
        header: headerReducer,
        countries: countriesReducer,
        tours: toursReducer,
        tour: tourDetailReducer,
        slider: sliderReducer,
        hotTours: hotToursReducer,
        ourRating: ourRatingReducer,
        mainTours: mainToursReducer,
        popularTours: popularToursReducer,
        footer: footerReducer,
        order: orderReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch