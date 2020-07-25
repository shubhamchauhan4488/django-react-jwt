import { createSlice } from '@reduxjs/toolkit';
import { assignToField, composeReducer } from '../../globals/Utilities';
import { mockBusinesses } from './../../mocks/savedBusinesses';
import { mockBusinessHours } from './../../mocks/businessHours';
import { createBusinesses, createBusinessHours } from './utilities';

const reducers = {
  FETCH_BUSINESSES_REQUEST: assignToField('isFetching', true),
  FETCH_BUSINESSES_SUCCESS: composeReducer(
    assignToField('isFetching', false),
    assignToField('isDirty', true),
  ),
  SET_BUSINESSES: composeReducer(
    assignToField('savedBusinesses'),
    assignToField('isDirty', true),
  ),
  FETCH_BUSINESSES_FAILURE: (state, { payload }) => {
    state.isFetching = false;
    state.error = payload;
    state.isDirty = false;
  },
  SET_SELECTED_BUSINESS: assignToField('selectedBusinessId'),
};

const businessesSlice = createSlice({
  name: 'businesses',
  reducers,
  initialState: {
    isFetching: false,
    isDirty: false,
    savedBusinesses: createBusinesses(mockBusinesses),
    selectedBusinessId: '',
    error: '',
  },
});


const businessHoursReducers = {
  FETCH_BUSINESS_HOURS_REQUEST: assignToField('isFetching', true),
  FETCH_BUSINESS_HOURS_SUCCESS: composeReducer(
    assignToField('isFetching', false),
    assignToField('isDirty', true),
  ),
  SET_BUSINESS_HOURS: composeReducer(
    assignToField('businessHours'),
    assignToField('isDirty', true),
  ),
  FETCH_BUSINESS_HOURS_FAILURE: composeReducer(
    assignToField('isFetching', false),
    assignToField('isDirty', false),
    assignToField('error'),
  )
};

const businessHoursSlice = createSlice({
  name: 'businessHours',
  reducers: businessHoursReducers,
  initialState: {
    isFetching: false,
    isDirty: false,
    businessHours: createBusinessHours(mockBusinessHours),
    error: '',
  },
});

const { reducer } = businessesSlice;
const businessesActions = businessesSlice.actions;

const { reducer: businessHours } = businessHoursSlice;
const businessHoursActions = businessHoursSlice.actions;

/** Exporting reducers and actions */
export {
  businessesActions,
  businessHoursActions,
  reducer,
  businessHours
};
