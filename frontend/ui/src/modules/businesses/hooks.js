import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import businessesApi from './api'
import { loadBusinesses } from './orchestration';
import { getBusinesses } from './selectors';

export const useBusinesses = () => {
   const dispatch = useDispatch();
   const savedBusinesses = useSelector(getBusinesses);

   return {
    loadBusinesses: () => dispatch(loadBusinesses()),
    savedBusinesses,
   };
};
