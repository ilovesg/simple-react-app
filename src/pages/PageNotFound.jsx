import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <p>
      Page not found.
      {' '}
      <Link to="/">Go back to the main page</Link>
    </p>
  );
}
