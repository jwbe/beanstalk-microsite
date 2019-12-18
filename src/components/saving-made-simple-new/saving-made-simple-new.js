import React, { useState } from 'react';
import styles from '../info-page/info-page.module.scss';
import titleStyles from '../info-title-styles/info-title-styles.module.scss';


const SavingMadeSimple = () => {
  const [showDiagramGraph, setShowDiagramGraph] = useState(true);

  return (
    <>
      <div className={`${titleStyles.TitleBlock} ${styles.TitleBlock___plant}`}>
        <h1 className={titleStyles.TitleBlock_heading}>
          Saving Made Simple
        </h1>
        <h2 className={titleStyles.TitleBlock_subheading}>
          Beanstalk gives you lots of ways to put<br className={titleStyles.TitleBlock_br___smUp}></br> more aside for your children
        </h2>
      </div>
      <section className={styles.Section}>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              FREE top ups from KidStart
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
              Invite others to contribute
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              Etiam dolor lacus, imperdiet sed metus vitae, tempus scelerisque augue. Suspendisse a iaculis quam, iaculis aliquet.
            </p>
          </div>
        </article>

        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Invest your spare change
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
              Easy and convenient to top-up whenever you are able to
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

export default SavingMadeSimple;

