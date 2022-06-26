import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PostItem from './PostItem';
import PostsForm from './PostForm';
import PostsFilter from './PostsFilter';
import Modal from '../modal/Modal';
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
  const [modal, setModal] = useState(false);

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
      <PostsFilter />
      <h2>Posts</h2>
      <Button variant="primary" type="button" onClick={() => setModal(true)}>
        Create post
      </Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostsForm setVisible={setModal} />
      </Modal>
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
          <TransitionGroup component="tbody">
            {resultPosts.map((post) => (
              <CSSTransition
                timeout={300}
                key={post.id}
                classNames={{
                  enter: styles['post-enter'],
                  enterActive: styles['post-enter-active'],
                  exit: styles['post-exit'],
                  exitActive: styles['post-exit-active'],
                }}
              >
                <PostItem post={post} className={styles.post} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </Table>
      ) : (
        'No posts found.'
      )}
    </div>
  );
}
