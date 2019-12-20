import React, { useState } from 'react';
import styles from '../info-page/info-page.module.scss';
import titleStyles from '../info-title-styles/info-title-styles.module.scss';


const RoundUps = () => {
  const [showDiagramGraph, setShowDiagramGraph] = useState(true);

  return (
    <>
      <div className={`${titleStyles.TitleBlock} ${styles.TitleBlock___plant}`}>
        <h1 className={titleStyles.TitleBlock_heading}>
          Round Ups
        </h1>
        <h2 className={titleStyles.TitleBlock_subheading}>
          Build a pot of gold with rounds-ups.
        </h2>
      </div>
      <section className={styles.Section}>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              When you make a purchase
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              Etiam dolor lacus, imperdiet sed metus vitae, tempus scelerisque augue. Suspendisse a iaculis quam, iaculis aliquet.
            </p>
          </div>
        </article>
      </section>


      <section className={styles.Section}>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Swipe to save the change
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              Etiam dolor lacus, imperdiet sed metus vitae, tempus scelerisque augue. Suspendisse a iaculis quam, iaculis aliquet.
            </p>
          </div>
        </article>

        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              And invest it for your kids!
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              Etiam dolor lacus, imperdiet sed metus vitae, tempus scelerisque augue. Suspendisse a iaculis quam, iaculis aliquet.
            </p>
          </div>
        </article>
      </section>


      <section className={styles.Section}>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Invest your change for the future
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              Make saving an easy habit with Round Ups. See your recent transactions and swipe to round up to the nearest £1 and invest the change into your beanstalk accounts.
            </p>
            <p className={styles.TextBlock_Paragraph}>
              Through the Open Banking scheme, you can give your bank permission to securely display your data to you within the Beanstalk app.
            </p>

            <p className={styles.TextBlock_Paragraph}>
              For example, if you bought a sandwich for £2.50, you can choose to ‘round up’ to £3 and invest the 50p change. 
            </p>

            <p className={styles.TextBlock_Paragraph}>
              Set Auto Round up and we will collect the change on all transactions for the week – you’ll be surprised at how it can add up.
            </p>

            <p className={styles.TextBlock_Paragraph}>
              If your total is under £5 it will roll on to the next week or you can edit the total to keep the pot growing.
            </p>
          </div>
        </article>
      </section>

      <section className={styles.Section}>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Swipe to save the change
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              Etiam dolor lacus, imperdiet sed metus vitae, tempus scelerisque augue. Suspendisse a iaculis quam, iaculis aliquet.
            </p>
          </div>
        </article>

        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              And invest it for your kids!
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              Etiam dolor lacus, imperdiet sed metus vitae, tempus scelerisque augue. Suspendisse a iaculis quam, iaculis aliquet.
            </p>
          </div>
        </article>
      </section>

    </>
  );
};

export default RoundUps;

