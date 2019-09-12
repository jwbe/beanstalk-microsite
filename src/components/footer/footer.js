import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Button, DESKTOP_COLOURS, DESKTOP_SIZES, DESKTOP_BORDERS } from '../button/button';
import styles from './footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuLinks {
            name
            link
            isButton
          }
          footer {
            companyRegistration
            companyAuthorised
            companyCopyright
          }
        }
      }
    }
  `);
  return (
    <footer className={styles.Footer}>
      <ul className={styles.Footer_navigation}>
        {
          data.site.siteMetadata.menuLinks.map((link) => {
            return (
              <li className={styles.Footer_navigation_item} key={link.name}>
                {
                  link.isButton 
                ?
                  <Button className={styles.Footer_navigation_button} link={link.link} 
                    mobileSize={DESKTOP_SIZES.MEDIUM}
                    desktopColour={DESKTOP_COLOURS.WHITE}
                    desktopSize={DESKTOP_SIZES.MEDIUM}
                    desktopBorder={DESKTOP_BORDERS.WHITE}
                    >
                    {link.name}
                  </Button>
                :
                  <Link className={styles.Footer_navigation_link} to={link.link}>
                    {link.name}
                  </Link>
                }
              </li>

            );
          })
        }
      </ul>
      <div className={styles.Footer_detailedLegals}>
        <p className={styles.Footer_companyRegistration}>
          {data.site.siteMetadata.footer.companyRegistration}
        </p>
        <p className={styles.Footer_companyAuthorised}>
          {data.site.siteMetadata.footer.companyAuthorised}
        </p>
      </div>
      <p className={styles.Footer_companyCopyright}>
        {data.site.siteMetadata.footer.companyCopyright}
      </p>
    </footer>
  );
};

export default Footer;