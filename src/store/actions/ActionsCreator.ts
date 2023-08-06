import axios from "../../axios";
import { Dispatch } from "@reduxjs/toolkit";

import { headerSlice } from "../slices/headerSlice";
import { countrySlice } from "../slices/countrySlice";
import { tourSlice } from "../slices/tourSlice";
import { tourDetailSlice } from "../slices/tourDetailSlice";
import { sliderSlice } from "../slices/sliderSlice";
import { hotTourSlice } from "../slices/hotTourSlice";
import { ourRatingSlice } from "../slices/ourRatingSlice";
import { mainTourSlice } from "../slices/mainTourSlice";
import { popularTourSlice } from "../slices/popularTourSlice";
import { footerSlice } from "../slices/footerSlice";
import { orderSlice } from "../slices/orderSlice";


export const fetchHeader = () => {
    return async function (dispatch: Dispatch) {
        try {

            dispatch(headerSlice.actions.fetching());
            const response = await axios.get('header_en');
            dispatch(headerSlice.actions.fetchingWithSuccess(response.data));

        } catch (e) {
            dispatch(headerSlice.actions.fetchingWithError(e as Error));
        }
    }
}

export const fetchCountries = () => {
    return async function (dispatch: Dispatch) {
        try {

            dispatch(countrySlice.actions.fetching());
            const response = await axios.get('countries_en');
            dispatch(countrySlice.actions.fetchingWithSuccess(response.data));

        } catch (e) {
            dispatch(countrySlice.actions.fetchingWithError(e as Error));
        }
    }
}

export const fetchSelectedTours = (country: string) => {
    return async function (dispatch: Dispatch) {
        try {

            dispatch(tourSlice.actions.fetching());
            const response = await axios.get('tours_en', {
                params: {
                    country
                }
            });
            dispatch(tourSlice.actions.fetchingWithSuccess(response.data));

        } catch (e) {
            dispatch(tourSlice.actions.fetchingWithError(e as Error));
        }
    }
}

export const fetchTourById = (id: number) => {
    return async function (dispatch: Dispatch) {
        try {

            dispatch(tourDetailSlice.actions.fetching());
            const response = await axios.get('/tours_en/' + id);
            dispatch(tourDetailSlice.actions.fetchingWithSuccess(response.data));

        } catch (e) {
            dispatch(tourDetailSlice.actions.fetchingWithError(e as Error));
        }
    }
}

export const fetchSliders = () => {
    return async function (dispatch: Dispatch) {
        try {

            dispatch(sliderSlice.actions.fetching());
            const response = await axios.get('sliders_en');
            dispatch(sliderSlice.actions.fetchingWithSuccess(response.data));

        } catch (e) {
            dispatch(sliderSlice.actions.fetchingWithError(e as Error));
        }
    }
}

export const fetchHotTours = () => {
    return async function (dispatch: Dispatch) {
        try {

            dispatch(hotTourSlice.actions.fetching());
            const response = await axios.get('hotTours_en');
            dispatch(hotTourSlice.actions.fetchingWithSuccess(response.data));

        } catch (e) {
            dispatch(hotTourSlice.actions.fetchingWithError(e as Error));
        }
    }
}

export const fetchOurRating = () => {
    return async function (dispatch: Dispatch) {
        try {

            dispatch(ourRatingSlice.actions.fetching());
            const response = await axios.get('ourRating_en');
            dispatch(ourRatingSlice.actions.fetchingWithSuccess(response.data));

        } catch (e) {
            dispatch(ourRatingSlice.actions.fetchingWithError(e as Error));
        }
    }
}

export const fetchMainTours = () => {
    return async function (dispatch: Dispatch) {
        try {

            dispatch(mainTourSlice.actions.fetching());
            const response = await axios.get('mainTours_en');
            dispatch(mainTourSlice.actions.fetchingWithSuccess(response.data));

        } catch (e) {
            dispatch(mainTourSlice.actions.fetchingWithError(e as Error));
        }
    }
}

export const fetchPopularTours = () => {
    return async function (dispatch: Dispatch) {
        try {

            dispatch(popularTourSlice.actions.fetching());
            const response = await axios.get('popularTours_en');
            dispatch(popularTourSlice.actions.fetchingWithSuccess(response.data));

        } catch (e) {
            dispatch(popularTourSlice.actions.fetchingWithError(e as Error));
        }
    }
}

export const fetchFooter = () => {
    return async function (dispatch: Dispatch) {
        try {

            dispatch(footerSlice.actions.fetching());
            const response = await axios.get('footer_en');
            dispatch(footerSlice.actions.fetchingWithSuccess(response.data));

        } catch (e) {
            dispatch(footerSlice.actions.fetchingWithError(e as Error));
        }
    }
}

export const fetchOrder = () => {
    return async function (dispatch: Dispatch) {
        try {

            dispatch(orderSlice.actions.fetching());
            const response = await axios.get('orders');
            dispatch(orderSlice.actions.fetchingWithSuccess(response.data));

        } catch (e) {
            dispatch(orderSlice.actions.fetchingWithError(e as Error));
        }
    }
}
