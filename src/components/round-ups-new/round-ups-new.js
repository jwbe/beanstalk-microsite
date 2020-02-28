import React, { useState } from 'react';
import styles from '../info-page/info-page.module.scss';
import titleStyles from '../info-title-styles/info-title-styles.module.scss';
import uniqueStyles from './roundups.module.scss';
import Iphone from '../iphone/iphone';

const RoundUps = () => {
  const [showDiagramGraph, setShowDiagramGraph] = useState(true);

  return (
    <>
    <div className={`${titleStyles.TitleBlock} ${styles.TitleBlock___plant}`}>
      <h1 className={titleStyles.TitleBlock_heading}>
        Round Ups
      </h1>
    </div>
    <section className={styles.Section}>
      <article className={styles.Article}>
        <div className={styles.TextBlock}>
          <h2 className={styles.TextBlock_Header}>
            Invest your change for the future
          </h2>
          <p className={styles.TextBlock_Paragraph}>
            Make saving an easy habit with Round Ups. See your recent transactions and swipe to round up to the nearest £1 and invest the change into your beanstalk accounts. Here's how it works.
          </p>
          <p className={styles.TextBlock_Paragraph}>
            Through the government backed Open Banking scheme you give your bank permission to securely display your data to you within the Beanstalk app.
          </p>
        </div>
      </article>
      <article className={`${styles.Article}`}>
        <Iphone className={uniqueStyles.Iphone}>
          <div className={`${styles.Iphone_screenshot} ${uniqueStyles.Iphone_screenshot___roundUps}`}></div>
        </Iphone>
      </article>
      <article className={styles.Article}>
        <div className={styles.TextBlock}>
          <p className={styles.TextBlock_Paragraph}>
            Swipe to round up and the change will be added to your running total for the week. For example: if you bought a sandwich for £2.50, you can choose to save 50p.
          </p>

          <p className={styles.TextBlock_Paragraph}>
            You can also set to automatically round up which will add the change from your purchases once they are 7 days old.
          </p>

          <p className={styles.TextBlock_Paragraph}>
            And if you are worried the round up total is too big, you can adjust it at any point. 
          </p>

        </div>
      </article>
    </section>

    <section className={styles.Section}>
      <article>
        <div className={styles.TextBlock}>
          <h2 className={styles.TextBlock_Header}>
            When is the round ups collected?
          </h2>
          <p className={styles.TextBlock_Paragraph}>
            At the start of each week, we reset your running total to zero and let you know how much we will be collecting by direct debit for the previous week. (If your total is under £5, it will roll over automatically as we don’t collect payments under £5).
          </p>
          <p className={styles.TextBlock_Paragraph}>
            The money you round up will be divided equally between all your Beanstalk accounts. For example: if you have two children, each will receive half the round ups.
          </p>
        </div>
      </article>
    </section>

    </>
  );
};

export default RoundUps;