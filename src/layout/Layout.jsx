import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import Navigation from '../features/navigation/Navigation';
import styles from './Layout.module.scss';

export default function Layout() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main className="py-5">
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer className={styles.copyright}>
        <Container>
          <div className="py-4 text-center">
            Made by Yaroslav Gafuanov
            {' '}
            (
            <Link to={{ pathname: 'https://github.com/ilovesg/' }} target="_blank">GitHub profile</Link>
            ),
            {' '}
            2022
          </div>
        </Container>
      </footer>
    </div>
  );
}
