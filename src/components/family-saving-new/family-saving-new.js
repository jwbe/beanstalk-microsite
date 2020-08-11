import React from 'react';
import styles from '../info-page/info-page.module.scss';
import titleStyles from '../info-title-styles/info-title-styles.module.scss';

import inviteTool from '../../images/beanstalk-illustrations_invite-tools.png';

import UL from '../custom-html-tags/ul/ul';
import contributionTool from '../../images/beanstalk-illustrations_parent-and-contributor-view.png';

import viewAndReply from '../../images/beanstalk-illustrations_messaging-gifts.png';

const FamilySaving = () => {
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
        </article>
      </section>

      <section className={styles.Section}>
        <article>
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
        <article className={styles.w100}>
          <img className={`${styles.centreAlignedAll} ${styles.responsiveImage}`} src={inviteTool} width="250" alt="Invite family member to Beanstalk"/>
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
        <article className={styles.w100}>
          <img className={`${styles.centreAlignedAll} ${styles.responsiveImage}`} src={contributionTool} width="450" alt="Invite family member to Beanstalk"/>
        </article>
      </section>

      <section className={styles.Section}>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              Send messages with gifts
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              Donors can add their own personal messages when they make gifts so you and they both have a record.
            </p>
          </div>
        </article>
      </section>

      <section className={styles.Section}>
        <article className={styles.w100}>
          <img className={`${styles.centreAlignedAll} ${styles.responsiveImage}`} src={viewAndReply} width="450" alt="Send a message with a gift"/>
        </article>
      </section>

      <section className={styles.Section}>
        <article className={styles.Article}>
          <div className={styles.TextBlock}>
            <h2 className={styles.TextBlock_Header}>
              It’s easy whatever your family’s shape or budget
            </h2>
            <p className={styles.TextBlock_Paragraph}>
              Families come in all shapes and sizes and Beanstalk fits them all:
            </p>
            <UL>
              <li>
                Whether you want to give them a few hundred or many thousand when they are 18
              </li>
              <li>
                Granny the only one putting money in – no issue!
              </li>
              <li>
                Different people saving for your children or your step children – that works!
              </li>
            </UL>
          </div>
        </article>
      </section>

    </>
  );
};

export default FamilySaving;

