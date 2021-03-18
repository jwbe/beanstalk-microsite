import React from 'react';
import Theme from './header.module.scss';
import Point from './point/point';
import Points from './points/points';

const Header = () => {
  return (
    <div className={Theme.Container}>
      <h1 className={Theme.Heading}>
        Open a Beanstalk account for your child
      </h1>

      <Points>
        <Point>
          All the family can easily contribute
        </Point>
        <Point>
          No contribution required to open account
        </Point>
        <Point>
          Packed with tools: round ups, KidStart and more
        </Point>
      </Points>


      <h3 className={Theme.SecondSubheading}>
        See what your child's Beanstalk account could look like
      </h3>

    </div>
  );
}

export default Header;