import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removePost } from './postsSlice';

export default function PostItem({ post }) {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.body}</td>
      <td>
        <Button variant="danger" onClick={() => dispatch(removePost(post.id))}>Delete</Button>
      </td>
    </tr>
  );
}
