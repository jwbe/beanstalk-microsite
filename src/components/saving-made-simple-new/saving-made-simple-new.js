import React, { useState } from 'react';
import styles from '../info-page/info-page.module.scss';
import titleStyles from '../info-title-styles/info-title-styles.module.scss';
import { TopUp, TOP_UP_ORDER  } from '../homepage/top-up/top-up';

import iconWallet from '../homepage/images/icon_wallet.svg';
import iconNameLabel from '../homepage/images/icon_nameLabel.svg';
import iconCashInHandSecondary from '../homepage/images/icon_top-ups--secondary.svg';

const sarahSlug = <span>£50.00 sent to Sarah by Jane Doe.<br/> <span className={styles.Homepage_topUps_message}>Happy birthday to little…</span></span>

const SavingMadeSimple = () => {
  const [showDiagramGraph, setShowDiagramGraph] = useState(true);
  return (
    <>
      <div className={`${titleStyles.TitleBlock} ${styles.TitleBlock___plant}`}>
        <h1 className={titleStyles.TitleBlock_heading}>
          Saving Made Simple
        </h1>
      </div>
      <section className={styles.Section}>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Tools to help you get there
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              With Beanstalk there are no minimum monthly contributions – you can open an account with nothing and chose to top-up as and when you wish. Receive contributions from grandparents and other family, earn money back on your purchases via KidStart and round up your high street purchases.
            </p>
          </div>
        </article>
        <article className={styles.Article}>
          <TopUp title={'Child top up'} recipient={sarahSlug} date={'24 Nov 1:54pm'} icon={iconNameLabel} button buttonText={'View'} order={TOP_UP_ORDER.FIRST}/>
          <TopUp title={'KidStart Savings'} recipient={'£12.82 money back on your shopping'} date={'24 Nov 10:02am'} icon={iconCashInHandSecondary}  order={TOP_UP_ORDER.SECOND}/>
          <TopUp title={'Round Ups Total'} recipient={'£10.33 total Round ups this week'} date={'24 Nov 9:26am'} icon={iconWallet} order={TOP_UP_ORDER.THIRD}/>
        </article>
      </section>
    </>
  );
};

export default SavingMadeSimple;



