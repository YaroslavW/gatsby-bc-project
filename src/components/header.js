import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
// import './header.module.scss';
import myHeaderStyles from "./header.module.scss";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          author
        }
      }
    }
  `)
  return (
    <header className={myHeaderStyles.header}>
      <h1>
        <Link className={myHeaderStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <p>{data.site.siteMetadata.author}</p>
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