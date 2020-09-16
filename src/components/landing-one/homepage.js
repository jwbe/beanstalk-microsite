import React from 'react';
import { Link } from 'gatsby';
import styles from './homepage.module.scss';
import DesktopNavigation from './desktop-navigation/desktop-navigation';
import MobileNavigation from './mobile-navigation/mobile-navigation';
import Section from './section/section';
import Point from './point/point';
import Iphone from '../iphone/iphone';
import Column from './column/column';
import { TopUp, TOP_UP_ORDER  } from './top-up/top-up';
import SimpleBars from '../simple-bars/simple-bars';

import footerLogoWhite from './images/footer_logo___white.svg';
import footerLogoSecondary from './images/footer_logo___secondary.svg';

import iconPiggybank from './images/icon_piggybank.svg';
import iconCashInHand from './images/icon_cash-in-hand.svg';
import iconCashInHandSecondary from './images/icon_top-ups--secondary.svg';
import iconRosette from './images/icon_rosette.svg';
import iconFamily from './images/icon_family.svg';
import iconWallet from './images/icon_wallet.svg';
import iconNameLabel from './images/icon_nameLabel.svg';

import iconFacebookSecondary from '../../images/icons/facebook-icon-secondary.png';
import iconInstagramSecondary from '../../images/icons/instagram-icon-secondary.png';
import iconTwitterSecondary from '../../images/icons/twitter-icon-secondary.png';
import iconLinkedInSecondary from '../../images/icons/linkedin-icon-secondary.png';

import iconFacebookWhite from '../../images/icons/facebook-icon-white.png';
import iconInstagramWhite from '../../images/icons/instagram-icon-white.png';
import iconTwitterWhite from '../../images/icons/twitter-icon-white.png';
import iconLinkedInWhite from '../../images/icons/linkedin-icon-white.png';

import PressLogos from '../press-logos/press-logos';

import AppBadges from './app-badges/app-badges';

const sarahSlug = <span>£50.00 sent to Sarah by Jane Doe.<br/> <span className={styles.Homepage_topUps_message}>Happy birthday to little…</span></span>

const Homepage = () => {
  return (
    <main className={styles.Homepage_main}>
      <header className={styles.Homepage_header}>
        <MobileNavigation className={styles.Homepage_mobileNavigation} layoutVariant={{homepage:true}}/>
        <DesktopNavigation className={styles.Homepage_desktopNavigation} layoutVariant={{homepage:true}}/>
        <div className={styles.Homepage_header_content}>
          <h1 className={styles.Homepage_heading}>
            The savings apps <br className={styles.Homepage_heading_lineBreak}/> that makes saving for children easy
          </h1>
          <p className={styles.Homepage_subheading}>
            The Beanstalk savings app helps families work together <br className={styles.Homepage_heading_lineBreak}/> to give their kids the best possible launch into adult life. <br className={styles.Homepage_heading_lineBreak}/> Get the app and start saving today!
          </p>
          <AppBadges/>
        </div>
        <div className={styles.Homepage_header_background_wrapper}>
          <div className={styles.Homepage_header_background}>
            <div className={`${styles.Homepage_header_background_section} ${styles.Homepage_header_background_section___left}`}>
              <div className={styles.Homepage_header_cartoon_wrapper}>
                <div className={`${styles.Homepage_header_cartoon} ${styles.Homepage_header_cartoon___desktop}`}></div>
              </div>
            </div>
            <div className={`${styles.Homepage_header_background_section} ${styles.Homepage_header_background_section___right}`}>
              <Iphone className={styles.Homepage_iphone___header}>
                <div className={`${styles.Homepage_iphone_screenshot} ${styles.Homepage_iphone_screenshot___header}`}>
                </div>
              </Iphone>
            </div>
          </div>
        </div>
        <div className={`${styles.Homepage_header_cartoon} ${styles.Homepage_header_cartoon___mobile}`}></div>
        <div className={styles.Homepage_header_bottom}>
        </div>
      </header>

      <Section className={`${styles.Homepage_section} ${styles.Homepage_section___firstSection}`}>
        <Column className={styles.Homepage_column___figure}>
          <div className={`${styles.Homepage_iphone_wrapper}`}>
            {
              /*
              <FundBalance/>
              */
            }
            <Iphone className={styles.Homepage_iphone_screenshot___header___underSM}>
              <div className={`${styles.Homepage_iphone_screenshot} ${styles.Homepage_iphone_screenshot___changeChildAllocation}`}>
              </div>
            </Iphone>
            <Iphone className={styles.Homepage_iphone_screenshot___changeChildAllocation___atSM}>
              <div className={`${styles.Homepage_iphone_screenshot} ${styles.Homepage_iphone_screenshot___header}`}>
              </div>
            </Iphone>
          </div>
        </Column>
        <Column className={styles.Homepage_column___copy}>
          <Point
            icon={iconPiggybank}
            heading='The UK saving app changing the way families save'>
            <p>
              Beanstalk makes saving and investing easy whatever your family’s shape or budget.
            </p>
            <p>
              With no minimum or regular contribution required, the Beanstalk app makes investing for your kids easy whether it is £10 or £1000, collect free savings on your shopping and round up your purchases to automatically save.
            </p>

          </Point>
          <div className={styles.Homepage_motherAndBabyCartoon}>

          </div>
        </Column>
      </Section>

      <Section className={styles.Homepage_section}>
        <Column className={`${styles.Homepage_column___copy}`}>
          <Point
            icon={iconFamily}
            heading='Family saving app'>
            <p>
              The Beanstalk savings app lets you open and manage accounts for all your children - and yourself if you would like.
            </p>
            <p>
              Through the same app, all the family can help out. Invite grandparents, or other family & and they will be linked to your children’s accounts so they can also contribute.
            </p>
          </Point>
          <div className={styles.Homepage_topUps}>
            <TopUp title={'Child top up'} recipient={sarahSlug} date={'24 Nov 1:54pm'} icon={iconNameLabel} button buttonText={'View'} order={TOP_UP_ORDER.FIRST}/>
            <TopUp title={'KidStart Savings'} recipient={'£12.82 money back on your shopping'} date={'24 Nov 10:02am'} icon={iconCashInHandSecondary}  order={TOP_UP_ORDER.SECOND}/>
            <TopUp title={'Round Ups Total'} recipient={'£10.33 total Round ups this week'} date={'24 Nov 9:26am'} icon={iconWallet} order={TOP_UP_ORDER.THIRD}/>
          </div>
        </Column>
        <Column className={`${styles.Homepage_column___figure} ${styles.Homepage_column___figure___homepage}`}>
          <div className={styles.Homepage_topUps___desktop}>
            <TopUp title={'Child top up'} recipient={sarahSlug} date={'24 Nov 1:54pm'} icon={iconNameLabel} button buttonText={'View'} order={TOP_UP_ORDER.FIRST}/>
            <TopUp title={'KidStart Savings'} recipient={'£12.82 money back on your shopping'} date={'24 Nov 10:02am'} icon={iconCashInHandSecondary}  order={TOP_UP_ORDER.SECOND}/>
            <TopUp title={'Round Ups Total'} recipient={'£10.33 total Round ups this week'} date={'24 Nov 9:26am'} icon={iconWallet} order={TOP_UP_ORDER.THIRD}/>
          </div>
        </Column>
      </Section>

      <Section className={styles.Homepage_section}>
        <Column className={styles.Homepage_column___copy}>
          <Point
            icon={iconCashInHand}
            heading='Reimagining child savings and investing'>
            <>
              <p>
                Beanstalk offers stocks & shares Junior ISAs and adult ISAs so any returns are tax free.
              </p>
              <p>
                Beanstalk offers stocks & shares Junior ISAs and adult ISAs so any returns are tax free.
              </p>
              <p>
                Use the savings app to choose from two low cost investment funds in the proportion you choose.
              </p>
              <p>
                At 0.5% our fee is one of the lowest meaning more saved for your kids. <Link to={"/designed-for-growth"}>Learn more</Link>
              </p>
            </>
          </Point>
        </Column>
        <Column className={styles.Homepage_column___figure}>
          <div className={`${styles.Homepage_iphone_wrapper} ${styles.Homepage_iphone_wrapper___tilted___right}`}>
            <Iphone>
              <div className={`${styles.Homepage_iphone_screenshot} ${styles.Homepage_iphone_screenshot___familySaving}`}>
              </div>
            </Iphone>
          </div>
        </Column>
      </Section>

      <Section className={`${styles.Homepage_section}`}>
        <div className={styles.H2_PressLogos_section}>
          <h2 className={styles.H2_PressLogos}>
            As seen in
          </h2>
          <PressLogos links='false'/>
        </div>
      </Section>

      <Section className={`${styles.Homepage_section}`}>
        <div className={styles.H2_PressLogos_section}>
          <h2 className={styles.H2_PressLogos}>
            Download the app today and start building your kids' nest eggs
          </h2>
          <AppBadges centred='true'/>
        </div>
      </Section>

      <Section className={styles.Homepage_section}>
        <p className={styles.Homepage_section_disclaimerText}>
          As with any investment the value can go down as well as up. Past performance is no indicator of future performance. The tax treatment of ISAs depends on your individual circumstances and may be subject to change in the future.
        </p>
      </Section>

      <footer className={styles.Homepage_footer}>
        <div className={styles.Homepage_footer_top}>
        </div>
        <div className={styles.Homepage_footer_container}>
          <div className={styles.Homepage_footer_inner}>
            <div className={styles.Homepage_footer_header}>
              <img className={`${styles.Homepage_footer_logo} ${styles.Homepage_footer_logo___secondary}`} src={footerLogoSecondary} width='223' height='28' alt="Beanstalk logo"/>
              <img className={`${styles.Homepage_footer_logo} ${styles.Homepage_footer_logo___white}`} src={footerLogoWhite} width='162' height='20' alt="Beanstalk logo"/>
              <div className={styles.Homepage_footer_socialIcons}>
                <a href="https://www.facebook.com/TheBeanstalkApp/" target="_blank" rel="noreferrer">
                  <img className={styles.Homepage_footer_socialIcons_desktop} src={iconFacebookSecondary} width="24" height="24" alt="Facebook icon"/>
                  <img className={styles.Homepage_footer_socialIcons_mobile} src={iconFacebookWhite} width="24" height="24" alt="Facebook icon"/>
                </a>
                <a href="https://www.instagram.com/thebeanstalkapp/" target="_blank" rel="noreferrer">
                  <img className={styles.Homepage_footer_socialIcons_desktop} src={iconInstagramSecondary} width="24" height="24" alt="Instagram icon"/>
                  <img className={styles.Homepage_footer_socialIcons_mobile} src={iconInstagramWhite} width="24" height="24" alt="Instagram icon"/>
                </a>
                <a href="https://twitter.com/TheBeanstalkApp" target="_blank" rel="noreferrer">
                  <img className={styles.Homepage_footer_socialIcons_desktop} src={iconTwitterSecondary} width="24" height="24" alt="Twitter icon"/>
                  <img className={styles.Homepage_footer_socialIcons_mobile} src={iconTwitterWhite} width="24" height="24" alt="Twitter icon"/>
                </a>
                <a href="https://www.linkedin.com/company/the-beanstalk-app" target="_blank" rel="noreferrer">
                  <img className={styles.Homepage_footer_socialIcons_desktop} src={iconLinkedInSecondary} width="24" height="24" alt="LinkedIn icon"/>
                  <img className={styles.Homepage_footer_socialIcons_mobile} src={iconLinkedInWhite} width="24" height="24" alt="LinkedIn icon"/>
                </a>
              </div>
            </div>
            <p className={styles.Homepage_footer_paragraph}>
              Beanstalk is a trading name of KidStart Limited. KidStart Limited is authorised and regulated by the Financial Conduct Authority. Our FCA number is 473606. See <a href='http://www.fca.org.uk' target="_blank" rel="noreferrer">http://www.fca.org.uk</a> for more information. View our <Link to='/data-privacy-and-cookies'>privacy policy</Link> and <Link to='/legals'>terms & conditions</Link>.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Homepage;