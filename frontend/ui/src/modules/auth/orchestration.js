import { authActions } from './slice';
import authApi from './api';
import history from "./../../globals/history";
export const signUp = (username, email, password) => async (dispatch, getState) => {
  dispatch(authActions.SIGNUP_REQUEST);
  try {
    const user = await authApi.trySignUp(username, email, password);
    dispatch(authActions.SIGNUP_SUCCESS());
    dispatch(authActions.SET_USER(user));
  } catch (e) {
    console.log(`Error : \nStatus: ${e?.response?.status}\nMsg: ${e?.response?.data?.detail} `);
    dispatch(authActions.SIGNUP_FAILURE(e?.response?.data?.detail ?? ''));
  }
};

export const signIn = (username, password) => async (dispatch, getState) => {
  dispatch(authActions.SIGNIN_REQUEST);
  try {
    const { token, user } = await authApi.trySignIn(username, password);
    dispatch(authActions.SIGNIN_SUCCESS());
    dispatch(authActions.SET_USER({ token, username: user?.username, email: user?.email }));
    if (token) {
      history.push('/dashboard');
    }
  } catch (e) {
    console.log(`Error : \nStatus: ${e?.response?.status}\nMsg: ${e?.response?.data?.detail} `);
    dispatch(authActions.SIGNIN_FAILURE(e?.response?.data?.detail ?? ''));
  }
};