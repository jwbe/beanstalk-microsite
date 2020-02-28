import React, { useState } from 'react';
import styles from './designed-for-growth.module.scss';
import FundBalance from '../fund-balance/fund-balance';
import SimpleBars from '../simple-bars/simple-bars';
import DesignedForGrowthGraph from '../designed-for-growth-graph/designed-for-growth-graph';
import titleStyles from '../info-title-styles/info-title-styles.module.scss';
import Iphone from '../iphone/iphone';



const DesignedForGrowth = () => {
  const [showDiagramGraph, setShowDiagramGraph] = useState(true);

  return (
    <>
      <div className={`${titleStyles.TitleBlock} ${styles.TitleBlock___plant}`}>
        <h1 className={titleStyles.TitleBlock_heading}>
          Designed for Growth
        </h1>
      </div>
      <section className={styles.Section}>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Pay less, save more
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              We want your children to benefit from your investment so the Beanstalk app is free to download and use. Our only charge is an annual fee of 0.5% on the value of any investments, one of the lowest around. (The low cost funds we offer have their own management fees of between 0.1% and 0.12% included)
            </p>
          </div>
        </article>

        <article className={`${styles.Article} ${styles.Article___lastOfType}`}>
          <DesignedForGrowthGraph/>
        </article>
      </section>

      <section className={styles.Section}>
        <article>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Tax free Junior ISA and adult ISA
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              We offer a stocks & shares JISA for your children and a similar ISA for yourself. Both are tax free for income and capital gains meaning more returns for you. The JISA is in the child’s name and any contributions are locked up and can only be accessed by them (or converted into an adult ISA) when they are 18
            </p>
          </div>
        </article>
      </section>

      <section className={styles.Section}>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Stocks and Shares can be a great way to grow your money
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              Many people choose stocks & shares when saving over longer periods as growth can compensate for the ups and downs. For example, over 50 years UK Shares returned over four times more than cash.
            </p>
            <p className={styles.TextBlock_Paragraph___smaller}>
              Source: Barclays Equity Gilt Study 2016
            </p>
          </div>
        </article>
        <article className={`${styles.Article} ${styles.Article___lastOfType}`}>
          <SimpleBars/>
        </article>
      </section>

      <section className={styles.Section}>
        <article className={`${styles.Article} ${styles.Article___fundBalance}`}>
         <Iphone>
           <div className={`${styles.Homepage_iphone_screenshot} ${styles.screenshot_changeAllocation}`}>
           </div>
         </Iphone>
        </article>
        <article className={`${styles.Article} ${styles.Article___lastOfType}`}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Choose from two funds
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              Use our slider to choose from two funds: a cash fund (Legal & General Cash Trust fund) which aims to provide returns in line with money market rates and a shares fund (Fidelity Global Index fund) which aims to track the performance of global stock markets and therefore large companies such as Amazon, Facebook, Google and Johnson & Johnson.
            </p>
          </div>
        </article>
      </section>

      <section className={styles.Section}>
        <p className={styles.TextBlock_disclaimerText}>
          As with any investment the value can go down as well as up. Past performance is no indicator of future performance. The tax treatment of ISAs depends on your individual circumstances and may be subject to change in the future.
        </p>
      </section>



    </>
  );
};

export default DesignedForGrowth;

