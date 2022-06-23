import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import PostItem from './PostItem';
import PostsForm from './PostForm';
import PostsFilter from './PostsFilter';
import {
  sortPosts,
  selectSort,
  selectPosts,
  selectFilter,
} from './postsSlice';
import styles from './PostList.module.scss';

export default function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const sort = useSelector(selectSort);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(sortPosts(sort));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortHandler = (field = 'id') => {
    if (field === sort.field) {
      const order = (sort.order === 'asc') ? 'desc' : 'asc';
      dispatch(sortPosts({ field, order }));
    } else {
      dispatch(sortPosts({ field, order: 'asc' }));
    }
  };

  const getFilteredPosts = ({ filterBy, filterQuery }) => posts.filter(
    (post) => post[filterBy].includes(filterQuery),
  );

  const resultPosts = getFilteredPosts(filter);

  return (
    <div className="post-list">
      <h1>Post list</h1>
      <PostsForm />
      <PostsFilter />
      <h2>Posts</h2>
      {resultPosts.length !== 0 ? (
        <Table responsive>
          <thead>
            <tr>
              {Object.keys(posts[0]).map((value) => (
                <th>
                  <button
                    type="button"
                    className={
                      value === sort.field
                        ? [styles['sort-button'], styles[`sort-button--${sort.order}`]].join(' ')
                        : styles['sort-button']
                    }
                    onClick={() => sortHandler(value)}
                  >
                    {value}
                  </button>
                </th>
              ))}
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {resultPosts.map((post) => (
              <PostItem post={post} key={post.id} />
            ))}
          </tbody>
        </Table>
      ) : (
        'No posts found.'
      )}
    </div>
  );
}
