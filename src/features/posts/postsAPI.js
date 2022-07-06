import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
    }),
    addPost: builder.mutation({
      query: (post) => ({
        url: 'posts',
        method: 'POST',
        body: JSON.stringify(post),
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `post/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export default postsApi;
export const {
  useGetPostsQuery,
  useAddPostMutation,
  useDeletePostMutation,
} = postsApi;
