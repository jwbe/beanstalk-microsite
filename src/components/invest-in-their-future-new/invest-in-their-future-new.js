import React, { useState } from 'react';
import styles from '../info-page/info-page.module.scss';
import titleStyles from '../info-title-styles/info-title-styles.module.scss';
import uniqueStyles from './invest-in-their-future-new.module.scss';
import Iphone from '../iphone/iphone';

const InvestInTheirFuture = () => {
  const [showDiagramGraph, setShowDiagramGraph] = useState(true);

  return (
    <>
      <div className={`${titleStyles.TitleBlock} ${styles.TitleBlock___plant}`}>
        <h1 className={titleStyles.TitleBlock_heading}>
          Changing the way families save
        </h1>
      </div>
      <section className={styles.Section}>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <p className={styles.TextBlock_Paragraph}>
              We believe every family can build a nest egg for the children they love. The Beanstalk app makes it easy whatever your family’s shape or budget.
            </p>
          </div>
        </article>
        <article className={`${styles.Article}`}>
          <Iphone className={uniqueStyles.Iphone}>
            <div className={`${styles.Iphone_screenshot} ${uniqueStyles.Iphone_screenshot___accountSetup}`}></div>
          </Iphone>
        </article>
      </section>

    </>
  );
};
 
export default InvestInTheirFuture;

