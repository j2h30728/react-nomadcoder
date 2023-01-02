import React from 'react';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to={`${process.env.PUBLIC_URL}/`}>H3N.MOVIE</Link>
    </nav>
  );
}

export default Nav;
