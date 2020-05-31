import { createSelector } from '@reduxjs/toolkit';

export const getUserId = state => state.auth.user.id;
export const getUserEmail = state => state.auth.user.email;
// export const getSaveCreditCardCheckbox = state => state.creditCards.saveCreditCardCheckbox;
// export const getIsDirty = state => state.creditCards.isDirty;
// export const getHasSavedCreditCards = createSelector(
//   state => state.creditCards.cards.allIds,
//   cards => cards.length > 0,
// );
// export const getSelectedCreditCard = createSelector(
//   [getSavedCreditCards, getSelectedCreditCardId],
//   (creditCards, cardId) => creditCards[cardId],
// );
