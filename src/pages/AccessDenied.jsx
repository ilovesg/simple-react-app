import React from 'react';
import { Link } from 'react-router-dom';

export default function AccessDenied() {
  return (
    <div>
      <h1>Access denied</h1>
      <p>
        We apologize for any inconvenience caused. Please,
        {' '}
        <Link to="/login">login</Link>
        {' '}
        and try again.
      </p>
    </div>
  );
}
