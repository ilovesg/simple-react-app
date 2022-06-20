import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [
    {
      id: 3,
      title: 'A sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'Z quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      id: 1,
      title: 'C sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'Y quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      id: 2,
      title: 'B sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'X quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
  ],
  status: 'idle',
  sort: {
    field: 'id',
    order: 1,
  },
};

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
    sortPosts: (state, { payload }) => {
      state.sort = payload;

      state.posts.sort((post1, post2) => {
        const a = post1[payload.field];
        const b = post2[payload.field];

        return a.toString().localeCompare(b) * payload.order;
      });
    },
  },
});

export const { addPost, removePost, sortPosts } = postsSlice.actions;

export const selectPosts = (state) => state.posts.posts;
export const selectSort = (state) => state.posts.sort;

export default postsSlice.reducer;
