import React from 'react';
import styles from './money-pile.module.scss';

const MoneyPile = () => {
  return (
    <>
      <div className={styles.MoneyPile___mobile}>
      </div>
      <div className={styles.MoneyPile}>
        <div className={`${styles.CoinStack} ${styles.CoinStack___coin___one} ${styles.CoinStack___foregroundUnderSm} `}>
          <div className={`${styles.RoundCoin} ${styles.Rotate30}`}>
          </div>
        </div>
        <div className={`${styles.CoinStack} ${styles.CoinStack___smallUnderSm} ${styles.CoinStack___one}`}>
          <div className={`${styles.StackedCoin} ${styles.StackedCoin___light}`}>
          </div>
          <div className={`${styles.StackedCoin} ${styles.StackedCoin___dark}`}>
          </div>
          <div className={`${styles.StackedCoin} ${styles.StackedCoin___light}`}>
          </div>
          <div className={`${styles.StackedCoin} ${styles.StackedCoin___dark}`}>
          </div>
          <div className={`${styles.StackedCoin} ${styles.StackedCoin___first} ${styles.StackedCoin___light}`}>
          </div>
        </div>
        <div className={`${styles.CoinStack} ${styles.CoinStack___two}`}>
          <div className={`${styles.StackedCoin} ${styles.StackedCoin___light}`}>
          </div>
          <div className={`${styles.StackedCoin} ${styles.StackedCoin___dark}`}>
          </div>
          <div className={`${styles.StackedCoin} ${styles.StackedCoin___light}`}>
          </div>
          <div className={`${styles.StackedCoin} ${styles.StackedCoin___dark}`}>
          </div>
          <div className={`${styles.StackedCoin} ${styles.StackedCoin___light}`}>
          </div>
          <div className={`${styles.StackedCoin} ${styles.StackedCoin___dark}`}>
          </div>
          <div className={`${styles.StackedCoin} ${styles.StackedCoin___light}`}>
          </div>
          <div className={`${styles.StackedCoin} ${styles.StackedCoin___first} ${styles.StackedCoin___dark}`}>
          </div>
        </div>
        <div className={`${styles.CoinStack} ${styles.CoinStack___smallUnderSm} ${styles.CoinStack___three}`}>
          <div className={`${styles.RoundCoin} ${styles.RoundCoin___smallUnderSm} ${styles.Rotate45}`}>
          </div>
          <div className={`${styles.StackedCoin} ${styles.StackedCoin___light}`}>
          </div>
          <div className={`${styles.StackedCoin} ${styles.StackedCoin___dark}`}>
          </div>
          <div className={`${styles.StackedCoin} ${styles.StackedCoin___light}`}>
          </div>
          <div className={`${styles.StackedCoin} ${styles.StackedCoin___first} ${styles.StackedCoin___dark}`}>
          </div>
        </div>
        <div className={`${styles.CoinStack} ${styles.CoinStack___coin___two} ${styles.CoinStack___foregroundUnderSm} `}>
          <div className={`${styles.RoundCoin} ${styles.Rotate75}`}>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoneyPile;