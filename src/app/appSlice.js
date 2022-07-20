import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authorization: {
    isAuthorized: false,
    username: '',
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    defineAuthorization: (state, { payload }) => {
      state.authorization = payload;
    },
  },
});

export const {
  defineAuthorization,
} = appSlice.actions;

export const selectAuthorization = (state) => state.app.authorization;

export default appSlice.reducer;
