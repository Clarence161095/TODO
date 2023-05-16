import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import settingReducer from './settingReducer';

export default configureStore({
  reducer: {
    auth: authReducer,
    setting: settingReducer,
  },
});
