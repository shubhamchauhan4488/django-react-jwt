import { createSlice } from '@reduxjs/toolkit';
import { assignToField, composeReducer } from '../../globals/Utilities';

const reducers = {
  SIGNIN_REQUEST: assignToField('isFetching', true),
  SIGNIN_SUCCESS: composeReducer(assignToField('isFetching', false)),
  SIGNIN_FAILURE: (state, { payload }) => {
    state.isFetching = false;
    state.error = payload;
  },
  UPDATE_AUTH_FORM_DATA: (state, action) => {
    const { payload } = action;
    state.form = {
      ...state.form,
      ...payload,
    };
  },
  SIGNUP_REQUEST: assignToField('isFetching', true),
  SIGNUP_SUCCESS: composeReducer(assignToField('isFetching', false)),
  SIGNUP_FAILURE: (state, { payload }) => {
    state.isFetching = false;
    state.error = payload;
  },
  SET_USER: (state, { payload }) => {
    state.user = {
      ...payload
    }
  },
};

const authSlice = createSlice({
  name: 'auth',
  reducers,
  initialState: {
    isFetching: false,
    error: '',
    user: {
      username: '',
      email: '',
      token: '',
    },
    form: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  },
});

const { reducer } = authSlice;
const authActions = authSlice.actions;

export {
  authActions,
  reducer,
};
