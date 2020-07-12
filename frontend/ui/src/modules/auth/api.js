import axios from 'axios';

const getSignUpUrl = () => 'http://127.0.0.1:8000/api/auth/register';
const getSignInUrl = () => 'http://127.0.0.1:8000/api/auth/login';

const authApi = {
  trySignUp: async (username, email, password) => {
    try {
      const url = getSignUpUrl();
      const response = await axios.post(url, { username, email, password });

      return response?.data;
    } catch (e) {
      throw e;
    }
  },
  trySignIn: async (username, password) => {
    try {
      const url = getSignInUrl();
      const response = await axios.post(url, { username, password });

      return response?.data;
    } catch (e) {
      console.log('e', e)

      throw e;
    }
  },
};

export default authApi;
