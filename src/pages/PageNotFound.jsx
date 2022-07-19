import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <p>
        We apologize for any inconvenience caused.
        {' '}
        <Link to="/">Go back to the homepage</Link>
        {' '}
        or
        {' '}
        <Link to="posts">to the post page</Link>
      </p>
    </div>
  );
}
