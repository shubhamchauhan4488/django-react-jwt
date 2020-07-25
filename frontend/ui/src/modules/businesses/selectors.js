import { createSelector } from "@reduxjs/toolkit";

export const getBusinesses = state => state.businesses?.savedBusinesses?.byId;
export const getBusinessesError = state => state.businesses?.error;
export const getSelectedBusinessId = state => state.businesses?.selectedBusinessId;

export const getSelectedBusiness = createSelector(
  [getBusinesses, getSelectedBusinessId],
  (businesses, businessId) => businesses[businessId],
);

export const getBusinessHours = state => state.businessHours?.businessHours?.byId;
export const getBusinessHoursError = state => state.businessHours?.error;
export const getHasBusinessHours = createSelector(
  getBusinessHours,
  hours => {
    console.log('hourssize', !!hours && Object.keys(hours).length > 0)
    return !!hours && Object.keys(hours).length > 0
  }
);