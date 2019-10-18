import React from 'react';
import styles from './homepage.module.scss';
import DesktopNavigation from '../desktop-navigation/desktop-navigation';
import MobileNavigation from '../mobile-navigation/mobile-navigation';
import Section from './section/section';
import Point from './point/point';
import WaitingList from './waiting-list/waiting-list';
import Iphone from '../iphone/iphone';
import Column from './column/column';
import TopUp from './top-up/top-up';
import DesignedForGrowthGraph from '../designed-for-growth-graph/designed-for-growth-graph';
import FundBalance from '../fund-balance/fund-balance';

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
        <MobileNavigation className={styles.Homepage_mobileNavigation} layoutVariant={{homepage:true}}/>
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
          <div className={`${styles.Homepage_iphone_wrapper} ${styles.Homepage_iphone_wrapper___tilted___left}`}>
            <FundBalance/>
          </div>
        </Column>
        <Column className={styles.Homepage_column___copy}>
          <Point
            icon={iconPiggybank}
            heading='Invest in their future'>
            <>
              <p>
                Five amazing tools to help you effortlessly build pots of money for your children and yourself in one simple app.
              </p>
              <p>
                You don't need a penny to get started - KidStart, friends and family can all contribute
              </p>
              <p>
                Save little and often with rounds-up and top up when the going is good
              </p>
            </>
          </Point>
          <div className={styles.Homepage_motherAndBabyCartoon}>

          </div>
        </Column>
      </Section>

      <Section className={styles.Homepage_section}>
        <Column className={styles.Homepage_column___copy}>
          <Point
            icon={iconCashInHand}
            heading='Saving made simple'>
            <>
              <p>
                Beanstalk makes it really easy to save for your children and you don't have to do it alone!
              </p>
              <ul className={styles.Homepage_point_list}>
                <li className={styles.Homepage_point_list_item}>
                  <strong className={styles.Homepage_point_strong}>Invite</strong> family and friends to help you save 
                </li>
                <li className={styles.Homepage_point_list_item}>
                  <strong className={styles.Homepage_point_strong}>FREE child top-ups</strong> from KidStart 
                </li>
                <li className={styles.Homepage_point_list_item}>
                  <strong className={styles.Homepage_point_strong}>Round-up</strong> transactions and invest the change 
                </li>
                <li className={styles.Homepage_point_list_item}>
                  <strong className={styles.Homepage_point_strong}>Easy top-ups</strong> including gift messages
                </li>
                <li className={styles.Homepage_point_list_item}>
                  <strong className={styles.Homepage_point_strong}>Regular Saver</strong> to help the pot grow 
                </li>
              </ul>
              <p>
                Plus see all your accounts and activity in one view
              </p>
            </>
          </Point>
          <div className={styles.Homepage_topUps}>
            <TopUp recipient={'£100 sent to Sarah'} date={'Date/Time'}/>
            <TopUp middle recipient={'£100 sent to Sarah'} date={'Date/Time'}/>
            <TopUp recipient={'£100 sent to Sarah'} date={'Date/Time'}/>
          </div>
        </Column>
        <Column className={`${styles.Homepage_column___figure} ${styles.Homepage_column___figure___homepage}`}>
          <div className={`${styles.Homepage_iphone_wrapper} ${styles.Homepage_iphone_wrapper___tilted___right} ${styles.Homepage_iphone_wrapper___topUps}`}>
            <Iphone/>
          </div>
        </Column>
      </Section>

      <Section className={`${styles.Homepage_section} ${styles.Homepage_section___thirdSection}`}>
        <Column className={styles.Homepage_column___figure}>
          <div className={styles.Homepage_designedForGrowthGraph_wrapper}>
            <DesignedForGrowthGraph/>
          </div>
        </Column>
        <Column className={styles.Homepage_column___copy}>
          <Point
            icon={iconRosette}
            heading='Designed for growth'>
            <>
              <p>
                Grow your child's savings by investing in our KidSave Junior ISA with a simple choice of two funds, which you can adjust
              </p>
              <p>
                We have no charges and one of the lowest fees on the market which means you can save more for your child.
              </p>
            </>
          </Point>
        </Column>
      </Section>

      <Section className={styles.Homepage_section}>
        <Column className={styles.Homepage_column___copy}>
          <Point
            icon={iconFamily}
            heading='Family saving'>
            <>
              <p>
                Get all the family involved! Grandparents, friends and the wider family can save for your family too.
              </p>
              <p>
                Simple and secure set-up with no complicated forms or visits in branch.
              </p>
              <p>
                Messages can be sent with money gifts and replies of thanks given straight away. Making each gift for their future one with a happy memory attached.
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