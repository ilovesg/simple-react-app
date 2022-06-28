import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import {
  definePosts,
  addPostsAsync,
  selectStatus,
} from './postsSlice';
import PostTable from './PostTable';
import Loader from '../loader/Loader';

export default function PostList({ posts, setVisible }) {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);

  return (
    <div>
      <h2 className="d-flex">
        Post list
        <Button variant="primary" type="button" className="ms-2" onClick={() => setVisible(true)}>
          Create post
        </Button>
        <Button variant="primary" type="button" className="ms-2" onClick={() => dispatch(addPostsAsync())}>
          Fetch posts
        </Button>
        <Button variant="primary" type="button" className="ms-2" onClick={() => dispatch(definePosts([]))}>
          Clear posts
        </Button>
      </h2>
      {status === 'idle'
        ? <PostTable posts={posts} />
        : <Loader />}
    </div>
  );
}
