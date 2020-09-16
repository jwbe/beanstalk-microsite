import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styles from './desktop-navigation.module.scss';
import logo from './images/logo.svg';

const DesktopNavigation = ({
  className,
  layoutVariant
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
    <>
      <nav className={`${className} ${styles.DesktopNavigation}`}>
        <img className={styles.DesktopNavigation_logo} src={logo} alt="Beanstalk logo" width="228" height="40"/>
        <div className={styles.DesktopNavigation_section}>
        </div>
      </nav>
    </>
  );
};

export default DesktopNavigation;