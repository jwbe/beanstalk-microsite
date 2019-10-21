import React from 'react';
import { Link } from 'gatsby';
import styles from './pod.module.scss';

import lightbulbIcon from '../../images/icons/lightbulb--secondary.svg';
import questionIcon from '../../images/icons/question--secondary.svg';
import legalsDocIcon from '../../images/icons/legal-doc--secondary.svg';
import phoneIcon from '../../images/icons/phone--secondary.svg';
import shieldIcon from '../../images/icons/shield--primary.svg';
import KFDIcon from '../../images/icons/legal-doc--exclamation--primary.svg';
import TickIcon from '../../images/icons/legal-doc--tick--primary.svg';

const Pod = ({
  icon,
  link,
  heading,
  description,
  type
}) => {

  let iconSelect = null;
  switch(type) {
    case('knowledge'):
      iconSelect = lightbulbIcon;
      break
    case('faqs'):
      iconSelect = questionIcon;
      break
    case('legals'):
      iconSelect = legalsDocIcon;
      break
    case('contact'):
      iconSelect = phoneIcon;
      break
    case('app-terms'):
      iconSelect = TickIcon;
      break
    case('isa-terms'):
      iconSelect = TickIcon;
      break
    case('key-facts'):
      iconSelect = KFDIcon;
      break
    case('privacy'):
      iconSelect = shieldIcon;
      break
  }

  return (
    <div className={styles.Pod_wrapper}>
      <article className={styles.Pod}>
        <Link className={styles.Pod_link} to={link}/>
        <div className={styles.Pod_icon_wrapper}>
          <img className={styles.Pod_icon} src={iconSelect} width='56' height='56'/>
        </div>
        <h2 className={styles.Pod_title}>
          {heading}
        </h2>
        <p className={styles.Pod_description}>
          {description}
        </p>
      </article>
    </div>
  );
}

export default Pod;