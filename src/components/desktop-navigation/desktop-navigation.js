import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Button, DESKTOP_COLOURS, DESKTOP_SIZES, TABLET_COLOURS, DESKTOP_BACKGROUNDS } from '../button/button';
import styles from './desktop-navigation.module.scss';
import logo from '../../images/logo.svg';

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

  const links = (sliceFrom, sliceTo, first) => {
    return (
      data.site.siteMetadata.menuLinks.slice(sliceFrom, sliceTo).map((link) => {
        return (
          <li className={`${styles.DesktopNavigation_item}`} key={link.name}>
            {
              link.isButton 
            ?
              layoutVariant.homepage ?
              <Button link={link.link} 
                tabletColour={TABLET_COLOURS.PRIMARY}
                desktopColour={DESKTOP_COLOURS.PRIMARY}
                desktopSize={DESKTOP_SIZES.MEDIUM}
                desktopBackground={DESKTOP_BACKGROUNDS.WHITE}
                >
                {link.name}
              </Button>
              :
              <Button link={link.link} 
                desktopColour={DESKTOP_COLOURS.SECONDARY}
                desktopSize={DESKTOP_SIZES.MEDIUM}
                desktopBackground={DESKTOP_BACKGROUNDS.WHITE}
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
      <nav className={`${className} ${styles.DesktopNavigation}`}>
        <Link className={styles.Link} to="https://smart.link/fbrw987fz7a2c?site_id=nav">
          <img className={styles.DesktopNavigation_logo} src={logo} alt="Beanstalk logo" width="228" height="40"/>
        </Link>
        <div className={styles.DesktopNavigation_section}>
          <ul className={styles.DesktopNavigation_items}>
            {links()}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default DesktopNavigation;