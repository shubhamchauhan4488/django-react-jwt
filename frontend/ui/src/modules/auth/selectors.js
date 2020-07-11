import { createSelector } from '@reduxjs/toolkit';

export const getUserName = state => state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;
export const getUserToken = state => state.auth.user.token;
export const getPassword = state => state.auth.user.password;

export const getFormUserName = state => state.auth.form.name;
export const getFormUserEmail = state => state.auth.form.email;
export const getFormPassword = state => state.auth.form.password;
export const getFormConfirmPassword = state => state.auth.form.confirmPassword;