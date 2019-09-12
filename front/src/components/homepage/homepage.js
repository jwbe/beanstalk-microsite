import React from 'react';
import styles from './homepage.module.scss';
import DesktopNavigation from '../desktop-navigation/desktop-navigation';
import MobileNavigation from '../mobile-navigation/mobile-navigation';
import Section from './section/section';
import Point from './point/point';
import WaitingList from './waiting-list/waiting-list';
import Iphone from './iphone/iphone';
import Column from './column/column';

import footerLogoWhite from './images/footer_logo___white.svg';
import footerLogoSecondary from './images/footer_logo___secondary.svg';

import iconPiggybank from './images/icon_piggybank.svg';
import iconCashInHand from './images/icon_cash-in-hand.svg';
import iconRosette from './images/icon_rosette.svg';
import iconFamily from './images/icon_family.svg';

const Homepage = () => {
  return (
    <main className={styles.Homepage_main}>
      <header className={styles.Homepage_header}>
        <MobileNavigation className={styles.Homepage_mobileNavigation}/>
        <DesktopNavigation className={styles.Homepage_desktopNavigation} layoutVariant={{homepage:true}}/>
        <div className={styles.Homepage_header_content}>
          <h1 className={styles.Homepage_heading}>
            Helping people do <br/>the best for their kids
          </h1>
          <p className={styles.Homepage_subheading}>
            Maximise the growth potential of your kids savings with our JISA. <br className={styles.Homepage_heading_lineBreak}/>
            Simple fund choices, low fees and no minimums.
          </p>
          <WaitingList className={styles.Homepage_header_waitingList}/>
        </div>
        <div className={styles.Homepage_header_background_wrapper}>
          <div className={styles.Homepage_header_background}>
            <div className={`${styles.Homepage_header_background_section} ${styles.Homepage_header_background_section___left}`}>
              <div className={styles.Homepage_header_cartoon_wrapper}>
                <div className={`${styles.Homepage_header_cartoon} ${styles.Homepage_header_cartoon___desktop}`}></div>
              </div>
            </div>
            <div className={`${styles.Homepage_header_background_section} ${styles.Homepage_header_background_section___right}`}>
              <Iphone className={styles.Homepage_iphone___header}/>
            </div>
          </div>
        </div>
        <div className={`${styles.Homepage_header_cartoon} ${styles.Homepage_header_cartoon___mobile}`}></div>
        <div className={styles.Homepage_header_bottom}>
        </div>
      </header>

      <Section>
        <Column className={styles.Homepage_column___figure}>
          <div class={styles.Homepage_iphone_wrapper}>
            <Iphone className={styles.Homepage_iphone___tilted___left}/>
          </div>
        </Column>
        <Column className={styles.Homepage_column___copy}>
          <Point
            icon={iconPiggybank}
            heading='Invest in their future'>
            Give your child a launch into adult life with Beanstalk.
          </Point>
        </Column>
      </Section>

      <Section className={styles.Homepage_section___secondSection}>
        <Column className={styles.Homepage_column___copy}>
          <Point
            icon={iconCashInHand}
            heading='Saving made simple'>
            Easy Top up, Save the change and Money back on your shopping - just some of the tools to help you save.
          </Point>
        </Column>
        <Column className={styles.Homepage_column___figure}>
          <div class={styles.Homepage_iphone_wrapper}>
            <Iphone className={styles.Homepage_iphone___tilted___right}/>
          </div>
        </Column>
      </Section>

      <Section>
        <Column className={styles.Homepage_column___figure}>
          <div class={styles.Homepage_iphone_wrapper}>
            <Iphone className={styles.Homepage_iphone___tilted___left}/>
          </div>
        </Column>
        <Column className={styles.Homepage_column___copy}>
          <Point
            icon={iconRosette}
            heading='Designed for growth'>
            Maximise the growth potential of your kids savings with our JISA. Simple fund choices, low fees and no minimums make it a no brainer!
          </Point>
        </Column>
      </Section>

      <Section>
        <Column className={styles.Homepage_column___copy}>
          <Point
            icon={iconFamily}
            heading='Family saving'>
            Invite family and friends to use Beanstalk to support your children and together we can help make a brighter future.
          </Point>
        </Column>
        <Column className={styles.Homepage_column___figure}>
          <div class={styles.Homepage_iphone_wrapper}>
            <Iphone className={styles.Homepage_iphone___tilted___right}/>
          </div>
        </Column>
      </Section>

      <footer className={styles.Homepage_footer}>
        <div className={styles.Homepage_footer_top}>
        </div>
        <div className={styles.Homepage_footer_container}>
          <div className={styles.Homepage_footer_inner}>
            <WaitingList className={styles.Homepage_footer_waitingList}/>
            <div className={styles.Homepage_footer_header}>
              <img className={`${styles.Homepage_footer_logo} ${styles.Homepage_footer_logo___secondary}`} src={footerLogoSecondary} width='223' height='28'/>
              <img className={`${styles.Homepage_footer_logo} ${styles.Homepage_footer_logo___white}`} src={footerLogoWhite} width='162' height='20'/>
            </div>
            <p className={styles.Homepage_footer_paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className={styles.Homepage_footer_paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Homepage;