import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function PostComments({ comments }) {
  return (
    <div>
      <h2>Comments</h2>
      {comments.length !== 0 ? (
        <ListGroup as="div">
          {comments.map((comment) => (
            <ListGroup.Item
              as="div"
              className="flex-column align-items-start"
              key={comment.id}
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{comment.name}</h5>
                <small>Some time ago</small>
              </div>
              <p className="mb-1">{comment.body}</p>
              <small>{`User ID: ${comment.id}`}</small>
              <br />
              <small>{comment.email}</small>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        'No comments yet.'
      )}
    </div>
  );
}
