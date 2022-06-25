import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addPost } from './postsSlice';

export default function PostForm({ setVisible }) {
  const dispatch = useDispatch();
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (event) => {
    event.preventDefault();

    if (post.title === '' || post.body === '') return;

    dispatch(addPost({ ...post, id: Date.now() }));

    setPost({ title: '', body: '' });
    setVisible(false);
  };

  return (
    <div className="post-list__form">
      <h2>Add post</h2>
      <Form className="mb-3" onSubmit={addNewPost}>
        <Form.Group className="mb-3" controlId="post-title">
          <Form.Label>Post title</Form.Label>
          <Form.Control type="text" placeholder="Enter post title" value={post.title} onChange={(event) => setPost({ ...post, title: event.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="post-body">
          <Form.Label>Post body</Form.Label>
          <Form.Control as="textarea" placeholder="Enter post body..." rows={3} value={post.body} onChange={(event) => setPost({ ...post, body: event.target.value })} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
