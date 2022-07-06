import React from 'react';
import { Button } from 'react-bootstrap';
import { useDeletePostMutation } from './postsAPI';

export default function PostItem({ post }) {
  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation();

  return (
    <tr>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.body}</td>
      <td>
        <Button variant="danger" onClick={() => deletePost(post.id)} disabled={isDeleting}>
          {isDeleting ? 'Deleting...' : 'Delete'}
        </Button>
      </td>
    </tr>
  );
}
