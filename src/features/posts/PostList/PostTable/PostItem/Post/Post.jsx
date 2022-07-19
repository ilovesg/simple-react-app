import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetPostQuery, useGetPostCommentsQuery } from '../../../../postsAPI';
import Loader from '../../../../../loader/Loader';
import PostComments from './PostComments/PostComments';

export default function Post() {
  const { id } = useParams();

  const {
    data: post = {},
    isLoading: isPostLoading,
  } = useGetPostQuery(id);

  const {
    data: comments = [],
    isLoading: isCommentsLoading,
  } = useGetPostCommentsQuery(id);

  return (
    <div>
      {!isPostLoading ? (
        <article className="mb-2 text-center">
          <h1>{`Post ${post.id}: ${post.title}`}</h1>
          <p>{post.body}</p>
          <span>{`Author ID: ${post.userId}`}</span>
        </article>
      )
        : <Loader />}
      {!isCommentsLoading ? (
        <PostComments comments={comments} />
      )
        : <Loader />}
      <p><Link to="/posts">Go back to post list</Link></p>
    </div>
  );
}
