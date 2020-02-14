import React, { useState } from 'react';
import styles from '../info-page/info-page.module.scss';
import titleStyles from '../info-title-styles/info-title-styles.module.scss';

import uniqueStyles from './family-saving-new.module.scss';

import Iphone from '../iphone/iphone';

const FamilySaving = () => {
  const [showDiagramGraph, setShowDiagramGraph] = useState(true);

  return (
    <>
      <div className={`${titleStyles.TitleBlock} ${styles.TitleBlock___plant}`}>
        <h1 className={titleStyles.TitleBlock_heading}>
          Family Saving
        </h1>
      </div>
      <section className={styles.Section}>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <p className={styles.TextBlock_Paragraph}>
              Beanstalk makes it easy for grandparents, other family and friends to save more together for the children they love.
            </p>
          </div>
          <div className={`${uniqueStyles.Image_contributors}`}></div>
        </article>
      </section>

      <section className={styles.Section}>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Our unique Invitations tool
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              Invite family and friends through the app and if they accept they will be linked to your your children’s accounts.
            </p>
          </div>
        </article>
      </section>

      <section className={styles.Section}>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              See how family have helped
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              Not only will you can see all the gifts and contributions they have made to your children, but they can also keep tally of their contribution through their own app. 
            </p>
          </div>
        </article>
      </section>

      <section className={styles.Section}>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Send messages with gifts
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              <span>Words TBC</span>
            </p>
          </div>
        </article>
      </section>

      <section className={styles.Section}>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <p className={styles.TextBlock_Paragraph}>
              Contributors can attach messages to their top-ups which you can reply to.
            </p>
          </div>
          <Iphone className={uniqueStyles.Iphone}>
            <div className={`${styles.Iphone_screenshot} ${uniqueStyles.Iphone_screenshot___respondToMessage}`}></div>
          </Iphone>
        </article>
      </section>

      <section className={styles.Section}>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <p className={styles.TextBlock_Paragraph}>
              Contributors can attach messages to their top-ups which you can reply to.
            </p>
          </div>
          <Iphone className={uniqueStyles.Iphone}>
            <div className={`${styles.Iphone_screenshot} ${uniqueStyles.Iphone_screenshot___respondToMessage}`}></div>
          </Iphone>
        </article>
      </section>

    </>
  );
};

export default FamilySaving;

