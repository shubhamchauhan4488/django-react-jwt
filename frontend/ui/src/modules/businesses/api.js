import axios from 'axios';

const getFetchBusinessesUrl = () => 'http://127.0.0.1:8000/api/businesses/';

const businessesApi = {
  tryFetchBusinesses: async () => {
    try {
      const url = getFetchBusinessesUrl();
      const response = await axios.get(url);

      return response?.data;
    } catch (e) {
      throw e;
    }
  },
};

export default businessesApi;
