import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PostItem from './PostItem';
import { selectSort, defineSort } from './postsSlice';
import styles from './PostTable.module.scss';

export default function PostList({ posts }) {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);

  const sortHandler = (field = sort.field) => {
    if (field === sort.field) {
      const order = (sort.order === 'asc') ? 'desc' : 'asc';

      dispatch(defineSort({ field, order }));
    } else {
      dispatch(defineSort({ field, order: 'asc' }));
    }
  };

  return (
    <div>
      {posts.length !== 0 ? (
        <Table responsive>
          <thead>
            <tr>
              <th>
                <button
                  type="button"
                  className={
                    sort.field === 'id'
                      ? [styles['sort-button'], styles[`sort-button--${sort.order}`]].join(' ')
                      : styles['sort-button']
                  }
                  onClick={() => sortHandler('id')}
                >
                  ID
                </button>
              </th>
              <th>
                <button
                  type="button"
                  className={
                    sort.field === 'title'
                      ? [styles['sort-button'], styles[`sort-button--${sort.order}`]].join(' ')
                      : styles['sort-button']
                  }
                  onClick={() => sortHandler('title')}
                >
                  Title
                </button>
              </th>
              <th>
                <button
                  type="button"
                  className={
                    sort.field === 'body'
                      ? [styles['sort-button'], styles[`sort-button--${sort.order}`]].join(' ')
                      : styles['sort-button']
                  }
                  onClick={() => sortHandler('body')}
                >
                  Body
                </button>
              </th>
              <th>Delete</th>
            </tr>
          </thead>
          <TransitionGroup component="tbody">
            {posts.map((post) => (
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
