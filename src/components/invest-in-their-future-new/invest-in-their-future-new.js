import React from 'react';
import styles from '../info-page/info-page.module.scss';
import titleStyles from '../info-title-styles/info-title-styles.module.scss';
import uniqueStyles from './invest-in-their-future-new.module.scss';
import Iphone from '../iphone/iphone';

const InvestInTheirFuture = () => {
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
            <div className={`${styles.Iphone_screenshot} ${uniqueStyles.Iphone_screenshot___homepage}`}></div>
          </Iphone>
        </article>
      </section>

      <section className={styles.Section}>
        <article>
          <h2 className={`${styles.TextBlock_Header} ${styles.TextBlock_Header___listTop}`}>Some of the great features</h2>

          <div className={styles.TextBlock_wrapper}>
            <h2 className={`${styles.TextBlock_Header} ${styles.TextBlock_Header___list}`}>
              Family saving
            </h2>
            <p className={`${styles.TextBlock_Paragraph} ${styles.TextBlock_Paragraph___list}`}>
              Link grandparents & others to your children: It’s a really simple way for grandparents to save for grandchildren
            </p>
          </div>

          <div className={styles.TextBlock_wrapper}>
            <h2 className={`${styles.TextBlock_Header} ${styles.TextBlock_Header___list}`}>
              No minimums
            </h2>
            <p className={`${styles.TextBlock_Paragraph} ${styles.TextBlock_Paragraph___list}`}>
              No need to commit to upfront or regular payments, you or others can top up whenever you want
            </p>
          </div>

          <div className={styles.TextBlock_wrapper}>
            <h2 className={`${styles.TextBlock_Header} ${styles.TextBlock_Header___list}`}>
              Easy ways to save
            </h2>
            <p className={`${styles.TextBlock_Paragraph} ${styles.TextBlock_Paragraph___list}`}>
              Free moneyback on your shopping, round up your purchases, easy top ups
            </p>
          </div>

          <div className={styles.TextBlock_wrapper}>
            <h2 className={`${styles.TextBlock_Header} ${styles.TextBlock_Header___list}`}>
              Single view
            </h2>
            <p className={`${styles.TextBlock_Paragraph} ${styles.TextBlock_Paragraph___list}`}>
              See and manage all your children’s accounts (and your own) in one app
            </p>
          </div>
        </article>
      </section>

    </>
  );
};
 
export default InvestInTheirFuture;

