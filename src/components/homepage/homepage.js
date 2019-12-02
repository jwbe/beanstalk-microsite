import React from 'react';
import { Link } from 'gatsby';
import styles from './homepage.module.scss';
import DesktopNavigation from '../desktop-navigation/desktop-navigation';
import MobileNavigation from '../mobile-navigation/mobile-navigation';
import Section from './section/section';
import Point from './point/point';
import WaitingList from './waiting-list/waiting-list';
import Iphone from '../iphone/iphone';
import Column from './column/column';
import { TopUp, TOP_UP_ORDER  } from './top-up/top-up';
import FundBalance from '../fund-balance/fund-balance';
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

const sarahSlug = <span>£50.00 sent to Sarah by Jane Doe.<br/> <span className={styles.Homepage_topUps_message}>Happy birthday to little…</span></span>

const Homepage = () => {
  return (
    <main className={styles.Homepage_main}>
      <header className={styles.Homepage_header}>
        <MobileNavigation className={styles.Homepage_mobileNavigation} layoutVariant={{homepage:true}}/>
        <DesktopNavigation className={styles.Homepage_desktopNavigation} layoutVariant={{homepage:true}}/>
        <div className={styles.Homepage_header_content}>
          <h1 className={styles.Homepage_heading}>
            Changing the way <br/>families save for their kids
          </h1>
          <p className={styles.Homepage_subheading}>
            Give your kids a launch into adult life with a tax-free<br className={styles.Homepage_heading_lineBreak}/> nest egg that the whole family can contribute to.
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
            heading='Invest in their future'>
            <p>
              We believe every family can build a nest egg for the children they love. You just need some magic beans to get started. Well alright we don't have magic beans but we have got an app that takes the pain away from saving and makes it really easy for grandparents and others to contribute.... pretty wizard.
            </p>
          </Point>
          <div className={styles.Homepage_motherAndBabyCartoon}>

          </div>
        </Column>
      </Section>

      <Section className={styles.Homepage_section}>
        <Column className={`${styles.Homepage_column___copy}`}>
          <Point
            icon={iconCashInHand}
            heading='Saving made simple'>
            <p>
              We're dragging children's savings kicking and screaming into the 21st century. If you love taking birth certificates in branch and waiting 6 months for paper statements, boy have we not got the right product for you. 
            </p>
            <p>
              If on the other hand you expect a slick user experience with fantastic features to help you (and grandparents) save little and often please pat yourself on the back while downloading the app.
            </p>
          </Point>
          <div className={styles.Homepage_topUps}>
            <TopUp title={'Child top up'} recipient={sarahSlug} date={'24 Nov 1:54pm'} icon={iconNameLabel} button buttonText={'View'} order={TOP_UP_ORDER.FIRST}/>
            <TopUp title={'KidStart Savings'} recipient={'£100 sent to Sarah'} date={'24 Nov 10:02am'} icon={iconCashInHandSecondary}  order={TOP_UP_ORDER.SECOND}/>
            <TopUp title={'Round Ups Total'} recipient={'£100 sent to Sarah'} date={'24 Nov 9:26am'} icon={iconWallet} order={TOP_UP_ORDER.THIRD}/>
          </div>
        </Column>
        <Column className={`${styles.Homepage_column___figure} ${styles.Homepage_column___figure___homepage}`}>
          <div className={styles.Homepage_topUps___desktop}>
            <TopUp title={'Child top up'} recipient={sarahSlug} date={'24 Nov 1:54pm'} icon={iconNameLabel} button buttonText={'View'} order={TOP_UP_ORDER.FIRST}/>
            <TopUp title={'KidStart Savings'} recipient={'£100 sent to Sarah'} date={'24 Nov 10:02am'} icon={iconCashInHandSecondary}  order={TOP_UP_ORDER.SECOND}/>
            <TopUp title={'Round Ups Total'} recipient={'£100 sent to Sarah'} date={'24 Nov 9:26am'} icon={iconWallet} order={TOP_UP_ORDER.THIRD}/>
          </div>
        </Column>
      </Section>

      <Section className={`${styles.Homepage_section} ${styles.Homepage_section___thirdSection}`}>
        <Column className={`${styles.Homepage_column___figure} ${styles.Homepage_column___figure} ${styles.Homepage_column___centredAtSm}`}>
          <div className={styles.Homepage_SimpleBars}>
            <SimpleBars/>
            <p>
              * Barclays Equity Gilt Study 2019
            </p>
          </div>
        </Column>
        <Column className={styles.Homepage_column___copy}>
          <Point
            icon={iconRosette}
            heading='Designed for growth'>
            <>
              <p>
                Would you put your pension in a bank account where the interest rate doesn't keep up with inflation? Do you stuff money under the mattress? Of course not – and there's no reason to do the same with the money you save for your kids. 
              </p>
              <p>
                Over the last 50 years the growth from shares has been over 4 times higher than interest paid on cash*. There are ups and downs but it pays to think long term when planning for your kids future. We also have one of the lowest fees in the industry – just 0.5%. See how we compare with others.
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
                Would you put your pension in a bank account where the interest rate doesn't keep up with inflation? Do you stuff money under the mattress?? Of course you not – and there's no reason to do the same with the money you save for your kids.
              </p>
              <p>
                Over the last 50 years the growth from shares has been over 4 times higher than interest paid on cash*. There are ups and downs but it pays to think long term when planning for your kids future. We also have one of the lowest fees in the industry – just 0.5%. See how we compare with others.
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

      <Section className={styles.Homepage_section}>
        <div className={styles.Homepage_partners}>
          <div className={styles.Homepage_partners_partner}>
          </div>
        </div>
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
              Beanstalk is a trading name of KidStart Limited. KidStart Limited is authorised and regulated by the Financial Conduct Authority. Our FCA number is 473606. See <a href='http://www.fca.org.uk'>http://www.fca.org.uk</a> for more information. View our <Link to='/data-privacy-and-cookies'>privacy policy</Link>.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Homepage;