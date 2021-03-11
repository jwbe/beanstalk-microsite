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
      <h2 className={Theme.Subheading}>
        One of the easiest ways to build a nest egg for their future
      </h2>

      <Points>
        <Point>
          Free top-ups from KidStart Savings
        </Point>
        <Point>
          No commitments - top up when you want
        </Point>
        <Point>
          Invite grandparents to help save
        </Point>
      </Points>


      <h3 className={Theme.SecondSubheading}>
        See what your child's Beanstalk account might look like
      </h3>

    </div>
  );
}

export default Header;