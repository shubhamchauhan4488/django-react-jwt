import { createSlice } from '@reduxjs/toolkit';
import { assignToField, composeReducer } from '../../globals/Utilities';

const reducers = {
   AUTH_REQUEST: assignToField('isFetching', true),
   AUTH_SUCCESS: composeReducer(assignToField('isFetching', false)),
   AUTH_FAILURE: (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
   },
   SIGNUP_REQUEST: assignToField('isFetching', true),
   SIGNUP_SUCCESS: composeReducer(assignToField('isFetching', false)),
   SIGNUP_FAILURE: (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
   }
}

const authSlice = createSlice({
   name: 'auth',
   reducers,
   initialState: {
      isFetching: false,
      user: {
         id: '',
         email: '',
         password: '',
      }
   },
});

const { reducer } = authSlice;
const authActions = authSlice.actions;

export {
   authActions,
   reducer,
};
