import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchPosts, { compareAsNumbers, compareAsStrings } from './postsAPI';

const initialState = {
  posts: [],
  status: 'idle',
  sort: {
    field: 'id',
    order: 'asc',
  },
  filter: {
    filterBy: 'title',
    filterQuery: '',
  },
};

export const addPostsAsync = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await fetchPosts();

    return response.data;
  },
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    definePosts: (state, { payload }) => {
      state.posts = payload;
    },
    sortPosts: (state, { payload }) => {
      state.sort = payload;

      state.posts.sort((post1, post2) => {
        const a = post1[payload.field];
        const b = post2[payload.field];

        if (payload.field === 'id') {
          return compareAsNumbers(a, b, payload.order);
        }

        return compareAsStrings(a, b, payload.order);
      });
    },
    defineFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addPostsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addPostsAsync.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.posts = payload;
      });
  },
});

export const {
  definePosts,
  addPost,
  removePost,
  sortPosts,
  defineFilter,
} = postsSlice.actions;

export const selectPosts = (state) => state.posts.posts;
export const selectSort = (state) => state.posts.sort;
export const selectFilter = (state) => state.posts.filter;
export const selectStatus = (state) => state.posts.status;

export default postsSlice.reducer;
