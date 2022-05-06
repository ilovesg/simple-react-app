import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import PostItem from './PostItem';
import PostsForm from './PostForm';

export default function PostsList() {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="post-list">
      <h1>Post list</h1>
      <PostsForm />
      <h2>Posts</h2>
      {posts.length !== 0 ? (
        <Table responsive>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <PostItem post={post} key={post.id} />
            ))}
          </tbody>
        </Table>
      ) : (
        'No posts yet.'
      )}
    </div>
  );
}
