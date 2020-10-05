import React, { useState } from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import styles from './mobile-navigation.module.scss';
import logo from './images/logo.svg';



const MobileNavigation = ({
  layoutVariant,
  className
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);

  return (
    <nav className={`${className} ${styles.MobileNavigation}`}>
      <div className={`${styles.MobileNavigation_logo_underlay} ${styles.MobileNavigation_logo_underlay___homepage}`}>
        <img
          className={styles.MobileNavigation_logo}
          src={logo}
          alt='Beanstalk logo'
          height='32'
        />
      </div>
    </nav>
  );
};

export default MobileNavigation;