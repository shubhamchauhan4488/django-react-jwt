import { businessesActions, businessHoursActions } from './slice';
import businessesApi from './api';
import { createBusinesses, createBusinessHours } from './utilities';
import { getUserToken } from '../auth';
import { getSelectedBusinessId } from './selectors';

export const loadBusinesses = () => async (dispatch, getState) => {
  dispatch(businessesActions.FETCH_BUSINESSES_REQUEST);
  try {
    const businesses = await businessesApi.tryFetchBusinesses(getUserToken(getState()));
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

export const fetchBusinessHours = () => async (dispatch, getState) => {
  dispatch(businessHoursActions.FETCH_BUSINESS_HOURS_REQUEST);
  try {
    const businesses = await businessesApi.tryFetchBusinessHours(getUserToken(getState()), getSelectedBusinessId(getState()));
    dispatch(businessHoursActions.FETCH_BUSINESS_HOURS_SUCCESS());
    dispatch(businessHoursActions.SET_BUSINESS_HOURS(createBusinessHours(businesses)));
  } catch (e) {
    console.log(`Error : \nStatus: ${e?.response?.status}\nMsg: ${e?.response?.data?.detail} `);
    dispatch(businessHoursActions.FETCH_BUSINESS_HOURS_FAILURE(e?.response?.data?.detail ?? ''));
  }
};
