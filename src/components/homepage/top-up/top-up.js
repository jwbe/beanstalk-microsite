import React from 'react';
import styles from './top-up.module.scss';
import classnames from 'classnames';

export const TOP_UP_ORDER = {
  FIRST: 'TopUp___first',
  SECOND: 'TopUp___second',
  THIRD: 'TopUp___third',
}

export const TopUp = ({
  title,
  order,
  className,
  recipient,
  date,
  icon
}) => {
  const orderClassnames = classnames(
    styles.TopUp,
    styles[ order ]
  );
  return (
    <div className={`${orderClassnames} ${styles.TopUp}`}>
      <div className={styles.TopUp_column}>
        <h3 className={styles.TopUp_header}>
          {title}
        </h3>
        <p className={styles.TopUp_recipient}>
          {recipient}
        </p>
        <p className={styles.TopUp_date}>
          {date}
        </p>
      </div>
      <div className={styles.TopUp_column}>
        <img className={styles.TopUp_icon} width='40' height='40' src={icon} alt='Top up icon'/>
      </div>
    </div>
  );
};