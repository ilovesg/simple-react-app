import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from './PostList';
import PostsForm from './PostForm';
import PostsFilter from './PostsFilter';
import Modal from '../modal/Modal';
import {
  selectPosts,
  selectFilter,
  addPostsAsync,
} from './postsSlice';
import usePosts from './usePosts';

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const filter = useSelector(selectFilter);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(addPostsAsync());
  }, [dispatch]);

  const resultPosts = usePosts(posts, filter);

  return (
    <div className="post-list">
      <h1>Posts</h1>
      <PostsFilter />
      <Modal visible={modal} setVisible={setModal}>
        <PostsForm setVisible={setModal} />
      </Modal>
      <PostList posts={resultPosts} setVisible={setModal} />
    </div>
  );
}
