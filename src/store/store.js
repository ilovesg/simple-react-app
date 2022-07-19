import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import postsApi from '../features/posts/postsAPI';
import postsReducer from '../features/posts/postsSlice';

const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    postsApi.middleware,
  ),
});

setupListeners(store.dispatch);

export default store;
