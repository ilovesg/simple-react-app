import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useAddPostMutation } from './postsAPI';

export default function PostForm({ setVisible }) {
  const [post, setPost] = useState({ title: '', body: '' });
  const [addPost, { isLoading: isAdding }] = useAddPostMutation();

  const addNewPost = async (event) => {
    event.preventDefault();

    if (post.title === '' || post.body === '') return;

    await addPost(post);

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
        <Button variant="primary" type="submit" disabled={isAdding}>
          {isAdding ? 'Adding...' : 'Submit'}
        </Button>
      </Form>
    </div>
  );
}
