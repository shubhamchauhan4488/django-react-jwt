import { reducer as auth } from '../modules/auth';
import { reducer as businesses, businessHours } from '../modules/businesses';

const rootReducer = {
  auth,
  businesses,
  businessHours,
};

export default rootReducer;
