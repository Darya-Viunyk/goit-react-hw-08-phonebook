import { combineReducers } from '@reduxjs/toolkit';
import { persistedAuthReduser } from './auth/auth.slice';
import { persistedPhoneBookReduser } from './tasks/phoneBook.slice';

export const rootReducer = combineReducers({
  auth: persistedAuthReduser,
  phoneBook: persistedPhoneBookReduser,
});
