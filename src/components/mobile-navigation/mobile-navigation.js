import React, { useState } from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import {
  Button,
  MOBILE_BACKGROUNDS,
  MOBILE_BORDERS,
  MOBILE_COLOURS,
  DESKTOP_BACKGROUNDS,
  DESKTOP_BORDERS,
  DESKTOP_COLOURS
} from '../button/button';
import styles from './mobile-navigation.module.scss';
import logo from '../../images/logo.svg';



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

  const isHomepage = layoutVariant.homepage === true;

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = event => {
    event.preventDefault();
    setShowMobileMenu(!showMobileMenu);
  };

  const mobileMenuClass = showMobileMenu ? 'isActive' : 'isNotActive';

  const links = (sliceFrom, sliceTo) =>
    data.site.siteMetadata.menuLinks.slice(sliceFrom, sliceTo).map(link => (
      <li className={styles.MobileNavigation_item} key={link.name}>
        <Link className={styles.MobileNavigation_link} to={link.link}>
          {link.name}
        </Link>
      </li>
    ));

  return (
    <nav className={`${className} ${styles.MobileNavigation} ${styles[mobileMenuClass]}`}>
      <Button
        className={styles.MobileNavigation_waitingListButton}
        link='/waiting-list'
        desktopBorder={DESKTOP_BORDERS.WHITE}
        desktopColour={DESKTOP_COLOURS.WHITE}
      >
        Join waiting list
      </Button>
      <div className={styles.MobileNavigation_slideMenu}>
        <ul className={styles.MobileNavigation_items}>{links(0, 3, true)}</ul>
        <Button
          desktopBackground={DESKTOP_BACKGROUNDS.WHITE}
          desktopColour={DESKTOP_COLOURS.SECONDARY}
          mobileBorder={MOBILE_BORDERS.WHITE}
          mobileBackground={MOBILE_BACKGROUNDS.TRANSPARENT}
          mobileColour={MOBILE_COLOURS.WHITE}
          clickHandle={toggleMobileMenu}
        >
          Menu
        </Button>
      </div>
      {
        isHomepage ?
        <div className={`${styles.MobileNavigation_logo_underlay} ${styles.MobileNavigation_logo_underlay___homepage}`}>
          <Link to='https://smart.link/fbrw987fz7a2c?site_id=nav'>
            <img
              className={styles.MobileNavigation_logo}
              src={logo}
              alt='Beanstalk logo'
              height='32'
            />
          </Link>
        </div>
        :
        <div className={styles.MobileNavigation_logo_underlay}>
          <Link to='https://smart.link/fbrw987fz7a2c?site_id=nav'>
            <img
              className={styles.MobileNavigation_logo}
              src={logo}
              alt='Beanstalk logo'
              height='32'
            />
          </Link>
        </div>
      }
    </nav>
  );
};

export default MobileNavigation;