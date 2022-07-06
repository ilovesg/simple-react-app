import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PostList from './PostList';
import PostsForm from './PostForm';
import PostsFilter from './PostsFilter';
import Modal from '../modal/Modal';
import {
  selectFilter,
  selectSort,
} from './postsSlice';
import usePosts from './usePosts';
import { useGetPostsQuery } from './postsAPI';

export default function Posts() {
  const filter = useSelector(selectFilter);
  const sort = useSelector(selectSort);
  const [modal, setModal] = useState(false);
  const { data = [], isLoading } = useGetPostsQuery();
  const resultPosts = usePosts(data, filter, sort);

  return (
    <div className="post-list">
      <h1>Posts</h1>
      <PostsFilter />
      <Modal visible={modal} setVisible={setModal}>
        <PostsForm setVisible={setModal} />
      </Modal>
      <PostList posts={resultPosts} setVisible={setModal} isLoading={isLoading} />
    </div>
  );
}
