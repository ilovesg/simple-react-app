import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  Form,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';
import { defineFilter, selectFilter } from './postsSlice';

export default function PostFilter() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(useSelector(selectFilter));

  useEffect(() => {
    dispatch(defineFilter(filter));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <Row className="mb-3">
      <Col>
        <h2>Search post</h2>
        <DropdownButton id="dropdown-basic-button" title={`Search by: ${filter.searchBy}`} className="mb-3">
          <Dropdown.Item onClick={() => setFilter({ ...filter, searchBy: 'title' })}>Title</Dropdown.Item>
          <Dropdown.Item onClick={() => setFilter({ ...filter, searchBy: 'body' })}>Body</Dropdown.Item>
        </DropdownButton>
        <Form.Control type="text" placeholder="Search post.." value={filter.searchQuery} onChange={(event) => setFilter({ ...filter, searchQuery: event.target.value })} />
      </Col>
    </Row>
  );
}