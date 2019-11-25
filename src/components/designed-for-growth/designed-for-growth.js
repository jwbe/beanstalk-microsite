import React, { useState } from 'react';
import styles from './designed-for-growth.module.scss';
import FundBalance from '../fund-balance/fund-balance';
import SimpleBars from '../simple-bars/simple-bars';
import DesignedForGrowthGraph from '../designed-for-growth-graph/designed-for-growth-graph';
import titleStyles from '../info-title-styles/info-title-styles.module.scss';


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
              Save more for your child
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              We want your children to benefit from their investment, so we have no charges and one of the lowest fees on the market - only 0.5%.
            </p>
          </div>
        </article>

        <article className={styles.Article}>
          <DesignedForGrowthGraph/>
        </article>

      </section>


      <section className={styles.Section}>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Shares are better
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              Over 50 years UK Shares returned over four times more than Cash as the ups and downs of shares were compensated for by higher growth.
            </p>
            <p className={styles.TextBlock_Paragraph___smaller}>
              Source: Barclays Equity Gift Study 2016
            </p>
          </div>
        </article>

        <article className={styles.Article}>
          <SimpleBars/>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Investments can be a great way to grow your money
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              Perhaps you're saving over a long period. A Junior ISA or a pension? The ups and downs of shares can be compensated for by higher growth.
            </p>
            <p className={styles.TextBlock_Paragraph}>
              Beanstalk is a Stocks & Shares Junior ISA allowing you to save for your child tax free.
            </p>
          </div>
        </article>

      </section>


      <section className={styles.Section}>
        <article className={`${styles.Article} ${styles.Article___fundBalance}`}>
          <div className={styles.fundBalance___wrapper}>
            <FundBalance/>
          </div>
        </article>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Choose your risk
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              We offer a simple choice of two funds. One is low risk and one tracks the market.
            </p>
            <p className={styles.TextBlock_Paragraph}>
              You can split and adjust your child's investment whenever you want, following its performance on the app.
            </p>
            <p className={styles.TextBlock_Paragraph___smaller}>
              Risk warning
            </p>
          </div>
        </article>
      </section>






    </>
  );
};

export default DesignedForGrowth;

