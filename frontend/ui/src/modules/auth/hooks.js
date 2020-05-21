import { onClickSavedCreditCard, onSelectRememberMeCheckbox } from './orchestration';
import { useDispatch, useSelector } from 'react-redux';

export const useAuth = () => {
   const dispatch = useDispatch();
   const { AUTH_REQUEST, SIGNUP_REQUEST } = authActions;
   return {
      onClickSignIn: e => {
         e => e.preventDefault();
         return dispatch(AUTH_REQUEST(e.target.value))
      },
      onClickSignUp: e => {
         e => e.preventDefault();
         return dispatch(SIGNUP_REQUEST(e.target.value))
      }
   };
};
