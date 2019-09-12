import React from 'react';
import classnames from 'classnames';
import styles from './main.module.scss';

export const LAYOUT_VARIANT = {
  ARTICLE: 'Main___article',
  PAGE: 'Main___page'
};

export const Main = ({
  children,
  layoutVariant
}) => {
  const mainClasses = classnames(
    styles.Main,
    styles[ layoutVariant ]
  );
  return (
    <div className={styles.Main_wrapper}>
      <main className={mainClasses}>
        {children}
      </main>
    </div>
  );
};