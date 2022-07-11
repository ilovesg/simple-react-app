import { configureStore, isRejectedWithValue } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { toast } from 'react-toastify';
import postsApi from '../features/posts/postsAPI';
import postsReducer from '../features/posts/postsSlice';

const rtkQueryErrorLogger = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    toast.error(`${action.payload.error}`);
  }

  return next(action);
};

const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    postsApi.middleware,
    rtkQueryErrorLogger,
  ),
});

setupListeners(store.dispatch);

export default store;
