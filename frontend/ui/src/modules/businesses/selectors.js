import { createSelector } from '@reduxjs/toolkit';

export const getBusinesses = state => state.businesses?.savedBusinesses?.byId;
