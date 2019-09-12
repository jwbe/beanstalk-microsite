import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Button, DESKTOP_COLOURS, DESKTOP_BORDERS, DESKTOP_BACKGROUNDS, DESKTOP_SIZES } from '../button/button';
import styles from './desktop-navigation.module.scss';
import logo from '../../images/logo.svg';

const DesktopNavigation = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuLinks {
            name
            link
            isButton
          }
        }
      }
    }
  `);

  const links = (sliceFrom, sliceTo, first) => {
    return (
      data.site.siteMetadata.menuLinks.slice(sliceFrom, sliceTo).map((link) => {
        return (
          <li className={`${styles.DesktopNavigation_item} ${first ? styles.DesktopNavigation_item___start : styles.DesktopNavigation_item___end}`} key={link.name}>
            {
              link.isButton 
            ?
              <Button link={link.link} 
                desktopColour={DESKTOP_COLOURS.WHITE}
                desktopSize={DESKTOP_SIZES.MEDIUM}
                desktopBorder={DESKTOP_BORDERS.WHITE}
                >
                {link.name}
              </Button>
            :
              <Link className={styles.DesktopNavigation_link} to={link.link}>
                {link.name}
              </Link>
            }
          </li>
        )
      })
    )
  };

  return (
    <>
      <nav className={styles.DesktopNavigation}>
        <div className={styles.DesktopNavigation_section}>
          <ul className={styles.DesktopNavigation_items}>
            {links(0,2, true)}
          </ul>
        </div>
        <div className={`${styles.DesktopNavigation_section} ${styles.DesktopNavigation_section___middle}`}>
          <Link to="/">
            <img className={styles.DesktopNavigation_logo} src={logo} alt="Beanstalk logo" width="228" height="40"/>
          </Link>
        </div>
        <div className={`${styles.DesktopNavigation_section} ${styles.DesktopNavigation_section___end}`}>
          <ul className={styles.DesktopNavigation_items}>
            {links(2,4)}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default DesktopNavigation;