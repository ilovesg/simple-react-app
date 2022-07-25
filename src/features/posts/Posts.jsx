import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PostList from './PostList/PostList';
import PostsForm from './PostForm/PostForm';
import PostFilter from './PostFilter/PostFilter';
import Modal from '../modal/Modal';
import {
  selectFilter,
  selectPager,
  selectSort,
} from './postsSlice';
import usePosts from './usePosts';
import { useGetPostsQuery } from './postsAPI';
import Pager from '../pager/Pager';

export default function Posts() {
  const filter = useSelector(selectFilter);
  const sort = useSelector(selectSort);
  const [modal, setModal] = useState(false);
  const { currentPage } = useSelector(selectPager);
  const {
    data = { response: [], totalCount: 0 },
    isLoading,
  } = useGetPostsQuery(currentPage);
  const resultPosts = usePosts(data.response, filter, sort);

  return (
    <>
      <h1>Posts</h1>
      <PostFilter />
      <Modal visible={modal} setVisible={setModal}>
        <PostsForm setVisible={setModal} />
      </Modal>
      <PostList
        posts={resultPosts}
        setVisible={setModal}
        isLoading={isLoading}
      />
      {data.totalCount ? <Pager totalCount={data.totalCount} /> : ''}
    </>
  );
}
