import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { defineAuthorization } from '../app/appSlice';

export default function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Login</h1>
      <Form className="mb-3" onSubmit={() => dispatch(defineAuthorization(true))}>
        <Form.Group className="mb-3" controlId="post-title">
          <Form.Label>Login</Form.Label>
          <Form.Control type="text" placeholder="Enter login" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="post-body">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
