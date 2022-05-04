import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

export default function PostItem({ post }) {
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
      <Button variant="danger">&times; Delete</Button>
    </ListGroup.Item>
  );
}
