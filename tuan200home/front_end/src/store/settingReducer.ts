import { createSlice } from '@reduxjs/toolkit';
import util from '../core/utilities.core';

export type Setting = {
  textColor: string;
  backgroundColor: string;
  navigatorColor: string;
};

export const DEFAULT_SETTINGS_COLOR = {
  textColor: '#ecf0f1',
  backgroundColor: '#2c3e50',
  navigatorColor: '#2d3436',
};

export const INIT_SETTING_STATE = {
  textColor: util.getLocalStore('textColor', '#ecf0f1'),
  backgroundColor: util.getLocalStore('backgroundColor', '#2c3e50'),
  navigatorColor: util.getLocalStore('navigatorColor', '#8e44ad'),
};

export const settingSlice = createSlice({
  name: 'setting',
  initialState: INIT_SETTING_STATE,
  reducers: {
    setTextColor: (state, action) => {
      state.textColor = action.payload.textColor;
      localStorage.setItem('textColor', action.payload.textColor);
    },
    setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload.backgroundColor;
      localStorage.setItem('backgroundColor', action.payload.backgroundColor);
    },
    setNavigatorColor: (state, action) => {
      state.navigatorColor = action.payload.navigatorColor;
      localStorage.setItem('navigatorColor', action.payload.navigatorColor);
    },
    setState: (state, action) => {
      state.textColor = action.payload.textColor;
      state.backgroundColor = action.payload.backgroundColor;
      state.navigatorColor = action.payload.navigatorColor;
      localStorage.setItem('textColor', action.payload.textColor);
      localStorage.setItem('backgroundColor', action.payload.backgroundColor);
      localStorage.setItem('navigatorColor', action.payload.navigatorColor);
    },
  },
});

export const { setTextColor, setBackgroundColor, setNavigatorColor, setState } =
  settingSlice.actions;

export const selectSetting = (state: any) => state.setting;

export default settingSlice.reducer;
