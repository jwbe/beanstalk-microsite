import React, { useState } from 'react';
import styles from '../info-page/info-page.module.scss';
import titleStyles from '../info-title-styles/info-title-styles.module.scss';


const InvestInTheirFuture = () => {
  const [showDiagramGraph, setShowDiagramGraph] = useState(true);

  return (
    <>
      <div className={`${titleStyles.TitleBlock} ${styles.TitleBlock___plant}`}>
        <h1 className={titleStyles.TitleBlock_heading}>
          Invest in their future
        </h1>
        <h2 className={titleStyles.TitleBlock_subheading}>
          The new, really easy way to build a pot of gold to give your child a launch into adult life
        </h2>
      </div>
      <section className={styles.Section}>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Imperdiet sed metus vitae
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              You don't need a penny to get started - KidStart, friends and family can all contribute
            </p>
          </div>
        </article>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Imperdiet sed metus vitae
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              Save little and often with round-ups or top up when the going is good
            </p>
          </div>
        </article>
      </section>


      <section className={styles.Section}>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Imperdiet sed metus vitae
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              Grow your child’s savings by investing with two simple choices
            </p>
          </div>
        </article>

        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Imperdiet sed metus vitae
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

export default InvestInTheirFuture;

