import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Simple React App homepage</h1>
      <p>
        Simple React App homepage is here.
        {' '}
        <Link to="posts">Please, show me posts</Link>
      </p>
    </div>
  );
}
