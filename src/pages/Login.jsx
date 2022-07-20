import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { defineAuthorization } from '../app/appSlice';

export default function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(defineAuthorization({ isAuthorized: true, username }));
  };

  return (
    <div>
      <h1>Login</h1>
      <Form className="mb-3" onSubmit={loginHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" value={username} onChange={(event) => setUsername(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
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
