import React from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useDeletePostMutation } from '../../../postsAPI';

export default function PostItem({ post }) {
  const [deletePost, { isLoading }] = useDeletePostMutation();

  const deletePostHandler = async (id) => {
    const postDeleting = toast.loading('Deleting post...');

    try {
      await deletePost(id).unwrap();

      toast.update(postDeleting, {
        render: 'Post deleted successfully.',
        type: 'success',
        isLoading: false,
        autoClose: 5000,
      });
    } catch (error) {
      toast.update(postDeleting, {
        render: `Error while deleting post, status: ${error.status}.`,
        type: 'error',
        isLoading: false,
        autoClose: 5000,
      });
    }
  };

  return (
    <tr>
      <td>{post.id}</td>
      <td><Link to={`${post.id}`}>{post.title}</Link></td>
      <td>{post.body}</td>
      <td>
        <Button variant="danger" onClick={() => deletePostHandler(post.id)} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Delete'}
        </Button>
      </td>
    </tr>
  );
}
