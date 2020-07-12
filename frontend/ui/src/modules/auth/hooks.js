import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './slice';
import { signUp, signIn } from './orchestration';
import { getFormUserName, getFormPassword, getFormUserEmail } from './selectors';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { UPDATE_AUTH_FORM_DATA } = authActions;

  const username = useSelector(getFormUserName);
  const email = useSelector(getFormUserEmail);
  const password = useSelector(getFormPassword);

  return {
    onClickSignIn: (e) => {
      e.preventDefault();
      return dispatch(signIn(username, password));
    },
    onSignInFormChange: e => dispatch(UPDATE_AUTH_FORM_DATA({ [e.target.name]: e.target.value })),
    onClickSignUp: (e) => {
      e.preventDefault();
      return dispatch(signUp(username, email, password));
    },
    onSignUpFormChange: e => dispatch(UPDATE_AUTH_FORM_DATA({ [e.target.name]: e.target.value }))
  };
};
