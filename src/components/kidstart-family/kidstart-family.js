import React from 'react';
import Theme from './kidstart-family.module.scss';

const KidStartFamily = () => {
  return (
    <div className={Theme.Container}>
      <div className={Theme.Container_Inner}>
        <div className={Theme.Logo}>
        </div>
        <p className={Theme.Text}>
          Beanstalk is the newest member of the <a href="https://www.kidstart.co.uk">KidStart</a> family. KidStart is the shopping club for parents that has been helping families save for their children for over 10 years and has helped thousands of families save millions for their little ones.
        </p>
      </div>
    </div>
  );
};

export default KidStartFamily;