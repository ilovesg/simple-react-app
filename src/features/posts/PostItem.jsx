import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removePost } from './postsSlice';

export default function PostItem({ post }) {
  const dispatch = useDispatch();

  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-center"
    >
      <div className="ms-2 me-auto">
        <h5 className="fw-bold">
          {post.title}
        </h5>
        {post.body}
      </div>
      <Button variant="danger" onClick={() => dispatch(removePost(post.id))}>Delete</Button>
    </ListGroup.Item>
  );
}
