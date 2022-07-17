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
  pager: {
    currentPage: 1,
    limit: 10,
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
    definePager: (state, { payload }) => {
      state.pager = payload;
    },
  },
});

export const {
  defineFilter,
  defineSort,
  definePager,
} = postsSlice.actions;

export const selectFilter = (state) => state.posts.filter;
export const selectSort = (state) => state.posts.sort;
export const selectPager = (state) => state.posts.pager;

export default postsSlice.reducer;
