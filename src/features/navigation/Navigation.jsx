import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';
import { defineAuthorization, selectAuthorization } from '../../app/appSlice';
import styles from './Navigation.module.scss';

export default function Navigation() {
  const dispatch = useDispatch();
  const { isAuthorized, username } = useSelector(selectAuthorization);

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Simple React App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="posts">Posts</Nav.Link>
            <Nav.Link as={NavLink} to="about">About</Nav.Link>
          </Nav>
          {isAuthorized ? (
            <Navbar.Text>
              Signed in as:
              {' '}
              {username}
              {' '}
              <button type="button" className={styles['logout-button']} onClick={() => dispatch(defineAuthorization({ isAuthorized: false, username: '' }))}>Logout</button>
            </Navbar.Text>
          ) : (
            <Navbar.Text>
              <Nav.Link as={Link} to="login">Login</Nav.Link>
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
