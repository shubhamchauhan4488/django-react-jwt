import { reducer as auth } from '../modules/auth';
import { reducer as businesses } from '../modules/businesses';

const rootReducer = {
	auth,
	businesses,
};

export default rootReducer;
