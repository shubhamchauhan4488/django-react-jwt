import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBusinesses, onClickBusiness } from './orchestration';
import { getBusinesses, getBusinessesError, getSelectedBusiness } from './selectors';
import { getUserToken } from '../auth/selectors';

export const useBusinesses = () => {
  const dispatch = useDispatch();
  const savedBusinesses = useSelector(getBusinesses);
  const businessesError = useSelector(getBusinessesError);
  const token = useSelector(getUserToken);

  useEffect(() => {
    if (!token) return;
    dispatch(loadBusinesses(token))
  }, [token])

  return {
    onClickBusiness: (id) => dispatch(onClickBusiness(id)),
    savedBusinesses,
    businessesError,
  };
};

export const useBusinessInfo = () => {
  const savedBusinesses = useSelector(getBusinesses);
  const selectedBusiness = useSelector(getSelectedBusiness)
  return {
    selectedBusiness
  }
}
