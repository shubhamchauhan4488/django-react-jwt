import { businessesActions } from './slice';
import businessesApi from './api';
import { createBusinesses } from './utilities';

export const loadBusinesses = (token) => async (dispatch, getState) => {
  dispatch(businessesActions.FETCH_BUSINESSES_REQUEST);
  try {
    const businesses = await businessesApi.tryFetchBusinesses(token);
    dispatch(businessesActions.FETCH_BUSINESSES_SUCCESS());
    dispatch(businessesActions.SET_BUSINESSES(createBusinesses(businesses)));
  } catch (e) {
    console.log(`Error : \nStatus: ${e?.response?.status}\nMsg: ${e?.response?.data?.detail} `);
    dispatch(businessesActions.FETCH_BUSINESSES_FAILURE(e?.response?.data?.detail ?? ''));
  }
};

export const onClickBusiness = id => async (dispatch, getState) => {
  dispatch(businessesActions.SET_SELECTED_BUSINESS(id));
}
