import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'react-bootstrap/Pagination';
import { definePager, selectPager } from '../posts/postsSlice';
import { getPages } from '../posts/postsHelpers';

export default function Pager({ totalCount }) {
  const dispatch = useDispatch();
  const { currentPage, limit } = useSelector(selectPager);
  const [pages, numberOfPages] = getPages(currentPage, limit, totalCount);

  if (numberOfPages && currentPage > numberOfPages) {
    dispatch(definePager({ limit, currentPage: numberOfPages }));
  }

  return (
    <Pagination>
      <Pagination.First
        onClick={() => dispatch(definePager({ limit, currentPage: 1 }))}
        disabled={currentPage === 1}
      />
      <Pagination.Prev
        onClick={() => dispatch(definePager({ limit, currentPage: currentPage - 1 }))}
        disabled={currentPage === 1}
      />
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={page === currentPage}
          onClick={() => dispatch(definePager({ limit, currentPage: page }))}
        >
          {page}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={() => dispatch(definePager({ limit, currentPage: currentPage + 1 }))}
        disabled={currentPage === numberOfPages}
      />
      <Pagination.Last
        onClick={() => dispatch(definePager({ limit, currentPage: numberOfPages }))}
        disabled={currentPage === numberOfPages}
      />
    </Pagination>
  );
}
