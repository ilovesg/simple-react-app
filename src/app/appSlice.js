import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthorized: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    defineAuthorization: (state, { payload }) => {
      state.isAuthorized = payload;
    },
  },
});

export const {
  defineAuthorization,
} = appSlice.actions;

export const selectAuthorization = (state) => state.app.isAuthorized;

export default appSlice.reducer;
