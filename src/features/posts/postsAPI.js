import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const postsApi = createApi({
  reducerPath: 'postsApi',
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
      providesTags: (result) => (result
        ? [
          ...result.map(({ id }) => ({ type: 'Posts', id })),
          { type: 'Posts', id: 'LIST' },
        ]
        : [{ type: 'Posts', id: 'LIST' }]),
    }),
    addPost: builder.mutation({
      query: (post) => ({
        url: 'posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),
  }),
});

export default postsApi;
export const {
  useGetPostsQuery,
  useAddPostMutation,
  useDeletePostMutation,
} = postsApi;
