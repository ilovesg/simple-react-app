import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPostQuery } from './postsAPI';
import Loader from '../loader/Loader';

export default function Post() {
  const { id } = useParams();

  const {
    data,
    isLoading,
  } = useGetPostQuery(id);

  return (
    <div>
      {!isLoading ? (
        <article className="text-center">
          <h1>{`Post ${data.id}: ${data.title}`}</h1>
          <p>{data.body}</p>
          <span>{`Author ID: ${data.userId}`}</span>
        </article>
      )
        : <Loader />}
    </div>
  );
}
