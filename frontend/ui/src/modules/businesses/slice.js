import { createSlice } from '@reduxjs/toolkit';
import { assignToField, composeReducer } from '../../globals/Utilities';
import { mockBusinesses } from './../../mocks/savedBusinesses';
import { createBusinesses } from './utilities';

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
};

console.log('createBusinesses(mockBusinesses)', createBusinesses(mockBusinesses));
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

const { reducer } = businessesSlice;
const businessesActions = businessesSlice.actions;

export {
  businessesActions,
  reducer,
};
