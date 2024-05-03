import { combineReducers } from 'redux';

import authSlice from './auth/authSlice';

export const reducers = combineReducers({
  auth: authSlice,
});
