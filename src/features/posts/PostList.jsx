import React from 'react';
import { Button } from 'react-bootstrap';
import PostTable from './PostTable';
import Loader from '../loader/Loader';

export default function PostList({
  posts,
  isLoading,
  setVisible,
}) {
  return (
    <div>
      <h2 className="d-flex">
        Post list
        <Button variant="primary" type="button" className="ms-2" onClick={() => setVisible(true)}>
          Create post
        </Button>
      </h2>
      {isLoading ? <Loader /> : <PostTable posts={posts} />}
    </div>
  );
}
