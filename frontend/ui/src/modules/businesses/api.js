import axios from 'axios';

const getFetchBusinessesUrl = () => 'http://127.0.0.1:8000/api/businesses/';
const getFetchBusinessHoursUrl = businessId => `http://127.0.0.1:8000/api/operatingHours/${businessId}`;

const businessesApi = {
  tryFetchBusinesses: async (token) => {
    try {
      const url = getFetchBusinessesUrl();
      const headers = {
        'Authorization': `Token ${token}`,
      };
      const response = await axios.get(url, { headers });

      return response?.data;
    } catch (e) {
      throw e;
    }
  },
  tryFetchBusinessHours: async (token, businessId) => {
    console.log('businessId', businessId)
    try {
      const url = getFetchBusinessHoursUrl(businessId);
      const headers = {
        'Authorization': `Token ${token}`,
      };
      const response = await axios.get(url, { headers });
      return response?.data;
    } catch (e) {
      throw e;
    }
  }
};

export default businessesApi;
