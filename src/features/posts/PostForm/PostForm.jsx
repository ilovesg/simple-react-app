import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useAddPostMutation } from '../postsAPI';

export default function PostForm({ setVisible }) {
  const [post, setPost] = useState({
    userId: 1,
    id: null,
    title: '',
    body: '',
  });
  const [addPost, { isLoading }] = useAddPostMutation();

  const addPostHandler = async (event) => {
    event.preventDefault();

    if (post.title === '' || post.body === '') {
      toast.error('Post title and body must not be empty!');

      return;
    }

    const postAdding = toast.loading('Adding post...');

    try {
      await addPost(post).unwrap();

      toast.update(postAdding, {
        render: 'Post added successfully.',
        type: 'success',
        isLoading: false,
        autoClose: 5000,
      });
    } catch (error) {
      toast.update(postAdding, {
        render: `Error while adding post, status: ${error.status}.`,
        type: 'error',
        isLoading: false,
        autoClose: 5000,
      });
    } finally {
      setPost({ title: '', body: '' });
      setVisible(false);
    }
  };

  return (
    <div className="post-list__form">
      <h2>Add post</h2>
      <Form className="mb-3" onSubmit={addPostHandler}>
        <Form.Group className="mb-3" controlId="post-title">
          <Form.Label>Post title</Form.Label>
          <Form.Control type="text" placeholder="Enter post title" value={post.title} onChange={(event) => setPost({ ...post, title: event.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="post-body">
          <Form.Label>Post body</Form.Label>
          <Form.Control as="textarea" placeholder="Enter post body..." rows={3} value={post.body} onChange={(event) => setPost({ ...post, body: event.target.value })} />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </Button>
      </Form>
    </div>
  );
}
