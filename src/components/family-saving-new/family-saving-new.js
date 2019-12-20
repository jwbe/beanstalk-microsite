import React, { useState } from 'react';
import styles from '../info-page/info-page.module.scss';
import titleStyles from '../info-title-styles/info-title-styles.module.scss';


const FamilySaving = () => {
  const [showDiagramGraph, setShowDiagramGraph] = useState(true);

  return (
    <>
      <div className={`${titleStyles.TitleBlock} ${styles.TitleBlock___plant}`}>
        <h1 className={titleStyles.TitleBlock_heading}>
          Family Saving
        </h1>
        <h2 className={titleStyles.TitleBlock_subheading}>
          If your total is under £5 it will roll on to the next week or you can edit the total to keep the pot growing.
        </h2>
      </div>
      <section className={styles.Section}>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Etiam dolor lacus
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              Get all the family involved!! Beanstalk makes it really easy for Grandparents, friends and your wider family to save for your child.
            </p>
          </div>
        </article>
      </section>


      <section className={styles.Section}>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Etiam dolor lacus
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              Etiam dolor lacus, imperdiet sed metus vitae, tempus scelerisque augue. Suspendisse a iaculis quam, iaculis aliquet.
            </p>
          </div>
        </article>

        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Etiam dolor lacus
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
              Etiam dolor lacus
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

export default FamilySaving;

