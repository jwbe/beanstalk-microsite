import React from 'react';
import { Link } from 'gatsby';
import styles from './footer.module.scss';

import footerLogoWhite from '../../images/footer_logo___white.svg';
import footerLogoSecondary from '../../images/footer_logo___secondary.svg';

import iconFacebookSecondary from '../../images/icons/facebook-icon-secondary.png';
import iconInstagramSecondary from '../../images/icons/instagram-icon-secondary.png';
import iconTwitterSecondary from '../../images/icons/twitter-icon-secondary.png';
import iconLinkedInSecondary from '../../images/icons/linkedin-icon-secondary.png';

import iconFacebookWhite from '../../images/icons/facebook-icon-white.png';
import iconInstagramWhite from '../../images/icons/instagram-icon-white.png';
import iconTwitterWhite from '../../images/icons/twitter-icon-white.png';
import iconLinkedInWhite from '../../images/icons/linkedin-icon-white.png';

/*
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

  const links = (sliceFrom, sliceTo) => {
    return (
      data.site.siteMetadata.menuLinks.slice(sliceFrom, sliceTo).map((link) => {
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
    )
  }
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer_inner}>
        <nav className={styles.Footer_navigation}>
          <ul className={`${styles.Footer_navigation_items} ${styles.Footer_navigation_items___start}`}>
            {links(0,2)}
          </ul>
          <ul className={`${styles.Footer_navigation_items} ${styles.Footer_navigation_items___center}`}>
            <li>
              <Link to={'/'}>
                <img className={styles.Footer_logo} src={logo} alt='Beanstalk logo' width='178' height='22'/>
              </Link>
            </li>
          </ul>
          <ul className={`${styles.Footer_navigation_items} ${styles.Footer_navigation_items___end}`}>
            {links(2,4)}
          </ul>
        </nav>
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
      </div>
    </footer>
  );
};
*/

const Footer = () => {
  return (
    <footer className={styles.Homepage_footer}>
      <div className={styles.Homepage_footer_top}>
      </div>
      <div className={styles.Homepage_footer_container}>
        <div className={styles.Homepage_footer_inner}>
          <div className={styles.Homepage_footer_header}>
            <img className={`${styles.Homepage_footer_logo} ${styles.Homepage_footer_logo___secondary}`} src={footerLogoSecondary} width='223' height='28'/>
            <img className={`${styles.Homepage_footer_logo} ${styles.Homepage_footer_logo___white}`} src={footerLogoWhite} width='162' height='20'/>
            <div className={styles.Homepage_footer_socialIcons}>
              <a href="https://www.facebook.com/TheBeanstalkApp/" target="_blank">
                <img className={styles.Homepage_footer_socialIcons_desktop} src={iconFacebookSecondary} width="24" height="24"/>
                <img className={styles.Homepage_footer_socialIcons_mobile} src={iconFacebookWhite} width="24" height="24"/>
              </a>
              <a href="https://www.instagram.com/thebeanstalkapp/" target="_blank">
                <img className={styles.Homepage_footer_socialIcons_desktop} src={iconInstagramSecondary} width="24" height="24"/>
                <img className={styles.Homepage_footer_socialIcons_mobile} src={iconInstagramWhite} width="24" height="24"/>
              </a>
              <a href="https://twitter.com/TheBeanstalkApp" target="_blank">
                <img className={styles.Homepage_footer_socialIcons_desktop} src={iconTwitterSecondary} width="24" height="24"/>
                <img className={styles.Homepage_footer_socialIcons_mobile} src={iconTwitterWhite} width="24" height="24"/>
              </a>
              <a href="https://www.linkedin.com/company/the-beanstalk-app" target="_blank">
                <img className={styles.Homepage_footer_socialIcons_desktop} src={iconLinkedInSecondary} width="24" height="24"/>
                <img className={styles.Homepage_footer_socialIcons_mobile} src={iconLinkedInWhite} width="24" height="24"/>
              </a>
            </div>
          </div>
          <p className={styles.Homepage_footer_paragraph}>
            Beanstalk is a trading name of KidStart Limited. KidStart Limited is authorised and regulated by the Financial Conduct Authority. Our FCA number is 473606. See <a href='http://www.fca.org.uk' target="_blank">http://www.fca.org.uk</a> for more information. View our <Link to='/data-privacy-and-cookies'>privacy policy</Link> and <Link to='/legals'>terms & conditions</Link>.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;