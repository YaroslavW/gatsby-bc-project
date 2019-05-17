import React from 'react';
import {Link} from 'gatsby';
// import './header.module.scss';
import myHeaderStyles from "./header.module.scss";

const Header = () => {
  return (
    <header className={myHeaderStyles.header}>
      <h1>
        <Link className={myHeaderStyles.title} to="/">
          Header title
        </Link>
      </h1>
      <nav>
        <ul className={myHeaderStyles.navList}>
          <li>
            <Link
              className={myHeaderStyles.navItem}
              activeClassName={myHeaderStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={myHeaderStyles.navItem}
              activeClassName={myHeaderStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={myHeaderStyles.navItem}
              activeClassName={myHeaderStyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={myHeaderStyles.navItem}
              activeClassName={myHeaderStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;