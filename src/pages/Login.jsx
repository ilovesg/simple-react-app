import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { defineAuthorization, selectAuthorization } from '../app/appSlice';

export default function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const { isAuthorized } = useSelector(selectAuthorization);

  const loginHandler = (event) => {
    event.preventDefault();

    if (!username) {
      toast.error('Username must not be empty!');

      return;
    }

    dispatch(defineAuthorization({ isAuthorized: true, username }));
  };

  return (
    <div>
      <h1>Login</h1>
      {isAuthorized ? (
        <div>
          Signed in as:
          {' '}
          {username}
          .
          {' '}
          <br />
          <Button variant="link" className="p-0" onClick={() => dispatch(defineAuthorization({ isAuthorized: false, username: '' }))}>Logout</Button>
        </div>
      ) : (
        <Form className="mb-3" onSubmit={loginHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" value={username} onChange={(event) => setUsername(event.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
}
