import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import PostItem from './PostItem';
import PostsForm from './PostForm';
import { sortPosts, selectSort } from './postsSlice';

export default function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const sort = useSelector(selectSort);

  useEffect(() => {
    dispatch(sortPosts(sort));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const sortHandler = (field = 'id') => {
    if (field === sort.field) {
      const order = -sort.order;
      dispatch(sortPosts({ field, order }));
    } else {
      dispatch(sortPosts({ field, order: 1 }));
    }
  };

  return (
    <div className="post-list">
      <h1>Post list</h1>
      <PostsForm />
      <h2>Posts</h2>
      {posts.length !== 0 ? (
        <Table responsive>
          <thead>
            <tr>
              <th onClick={() => sortHandler('id')}>ID</th>
              <th onClick={() => sortHandler('title')}>Title</th>
              <th onClick={() => sortHandler('body')}>Body</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <PostItem post={post} key={post.id} />
            ))}
          </tbody>
        </Table>
      ) : (
        'No posts yet.'
      )}
    </div>
  );
}
