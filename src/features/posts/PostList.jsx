import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import PostItem from './PostItem';

export default function PostsList() {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="post-list">
      <h1>Post list</h1>
      <ListGroup as="ul">
        {
          posts.map((post) => (
            <PostItem post={post} key={post.id} />
          ))
        }
      </ListGroup>
    </div>
  );
}
