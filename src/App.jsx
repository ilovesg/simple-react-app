import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.scss';
import PostsList from './features/posts/PostList';

function App() {
  return (
    <Container>
      <PostsList />
    </Container>
  );
}

export default App;
