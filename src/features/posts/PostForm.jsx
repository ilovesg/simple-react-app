import React from 'react';
import {
  Form,
  Button,
} from 'react-bootstrap';

export default function PostForm() {
  return (
    <div className="post-list__form">
      <h2>Add post</h2>
      <Form className="mb-3">
        <Form.Group className="mb-3" controlId="post-title">
          <Form.Label>Post title</Form.Label>
          <Form.Control type="text" placeholder="Enter post title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="post-body">
          <Form.Label>Post body</Form.Label>
          <Form.Control as="textarea" placeholder="Enter post body..." rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
