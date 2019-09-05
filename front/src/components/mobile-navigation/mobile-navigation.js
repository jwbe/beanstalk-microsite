import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Button, MOBILE_BACKGROUNDS, MOBILE_BORDERS, MOBILE_COLOURS, DESKTOP_BACKGROUNDS, DESKTOP_BORDERS, DESKTOP_COLOURS } from '../button/button';
import styles from './mobile-navigation.module.scss';
import logo from '../../images/logo.svg';

const MobileNavigation = ({
  state,
  handlers
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

  const MENU_STATE_CSS_CLASSES = {
    IS_ACTIVE: 'isActive',
    IS_NOT_ACTIVE: 'isNotActive'
  };

  const { handler } = handlers;

  const mobileMenuActive = state.state.showMobileMenu ? MENU_STATE_CSS_CLASSES.IS_ACTIVE : MENU_STATE_CSS_CLASSES.IS_NOT_ACTIVE;

  const links = (sliceFrom, sliceTo) => {
    return (
      data.site.siteMetadata.menuLinks.slice(sliceFrom, sliceTo).map((link) => {
        return (
          <li className={styles.MobileNavigation_item} key={link.name}>
            {
              <Link className={styles.MobileNavigation_link} to={link.link}>
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
      <nav className={`${styles.MobileNavigation} ${styles[ mobileMenuActive ]}`}>
        <Button className={styles.MobileNavigation_waitingListButton} link="/waiting-list" 
          desktopBorder={DESKTOP_BORDERS.WHITE} 
          desktopColour={DESKTOP_COLOURS.WHITE}
          >
          Join waiting list
        </Button>
        <div className={styles.MobileNavigation_slideMenu}>
          <ul className={styles.MobileNavigation_items}>
            {links(1,4, true)}
          </ul>
          <Button 
            desktopBackground={DESKTOP_BACKGROUNDS.WHITE} 
            desktopColour={DESKTOP_COLOURS.SECONDARY}  
            mobileBorder={MOBILE_BORDERS.WHITE} 
            mobileBackground={MOBILE_BACKGROUNDS.TRANSPARENT} 
            mobileColour={MOBILE_COLOURS.WHITE}
            clickHandler={handler}
            >
            Menu
          </Button>
        </div>
        <div className={styles.MobileNavigation_logo_underlay}>
          <Link to="/">
            <img className={styles.MobileNavigation_logo} src={logo} alt="Beanstalk logo" height="32"/>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default MobileNavigation;