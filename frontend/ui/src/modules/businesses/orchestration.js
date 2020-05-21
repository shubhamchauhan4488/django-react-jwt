import { businessesActions } from "./slice";
import businessesApi from './api';
import { createBusinesses } from "./utilities";

export const loadBusinesses = () => async (dispatch, getState) => {
    dispatch(businessesActions.FETCH_BUSINESSES_REQUEST);
    try {
        const businesses = await businessesApi.tryFetchBusinesses();
        dispatch(businessesActions.FETCH_BUSINESSES_SUCCESS())
        dispatch(businessesActions.SET_BUSINESSES(createBusinesses(businesses)))
    } catch (e) {
        console.log(`Error : Unable to fetch businesses : + ${e} Details: `,e.toJson())
        dispatch(businessesActions.FETCH_BUSINESSES_FAILURE());
    }
}