import React from 'react';
import { Link } from 'gatsby';
import headerStyles from './header.module.scss';

const Header = (props) => {
  return (
    <>
      <header>
        <h1>
          {props.heading}
        </h1>
        <p>
          {props.subheading}
        </p>
      </header>
    </>
  );
};

export default Header;