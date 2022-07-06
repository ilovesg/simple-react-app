import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sort: {
    field: 'id',
    order: 'asc',
  },
  filter: {
    filterBy: 'title',
    filterQuery: '',
  },
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    defineFilter: (state, { payload }) => {
      state.filter = payload;
    },
    defineSort: (state, { payload }) => {
      state.sort = payload;
    },
  },
});

export const {
  defineFilter,
  defineSort,
} = postsSlice.actions;

export const selectFilter = (state) => state.posts.filter;
export const selectSort = (state) => state.posts.sort;

export default postsSlice.reducer;
