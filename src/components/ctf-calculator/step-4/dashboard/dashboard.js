import React from 'react';
import numberWithCommas from '../../helpers';
import DashboardTheme from './dashboard.module.scss';

const Dashboard = ({totalFees}) => {
  return (
    <div className={DashboardTheme.Dashboard}>
      <h3 className={DashboardTheme.Dashboard_Heading}>
        When your child is 18 you will have saved
      </h3>
      <div className={DashboardTheme.Dashboard_TotalFees}>
        {`£${numberWithCommas(totalFees)}`}
      </div>
    </div>
  )
}

export default Dashboard;