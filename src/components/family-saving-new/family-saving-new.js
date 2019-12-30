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
            <h2 className={styles.TextBlock_Header}>
              Invite grandparents and others to link to your Beanstalk accounts
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              Your family and close friends can be linked to your Beanstalk accounts which allows them to make top-ups, set regular contributions and see how much they've contributed to your child's account.  
            </p>
          </div>
          <div className={`${uniqueStyles.Image_contributors}`}></div>
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

