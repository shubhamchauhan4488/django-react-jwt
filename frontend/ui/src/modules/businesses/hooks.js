import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBusinesses, onClickBusiness, fetchBusinessHours } from './orchestration';
import { getBusinesses, getBusinessesError, getSelectedBusiness, getBusinessHours, getHasBusinessHours, getSelectedBusinessId } from './selectors';
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
  const dispatch = useDispatch();
  const selectedBusiness = useSelector(getSelectedBusiness);
  const selectedBusinessHours = useSelector(getBusinessHours);
  const token = useSelector(getUserToken);
  const selectedBusinessId = useSelector(getSelectedBusinessId);
  const hasBusinessHours = useSelector(getHasBusinessHours);
  // useEffect(() => {
  //   if (!token || !selectedBusinessId) return;
  //   dispatch(fetchBusinessHours())
  // }, [token, selectedBusinessId])

  return {
    selectedBusiness,
    selectedBusinessHours,
    hasBusinessHours,
    dispatchFetchBusinessHours: () => dispatch(fetchBusinessHours())
  }
}
