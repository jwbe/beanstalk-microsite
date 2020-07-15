import React from 'react';
import numberWithCommas from '../../helpers';
import DashboardTheme from './dashboard.module.scss';

const Dashboard = ({totalFees}) => {
  return (
    <div className={DashboardTheme.Dashboard}>
      <div className={DashboardTheme.Dashboard_Background}>
        <h3 className={DashboardTheme.Dashboard_Heading}>
          When your child is 18 you will have saved in fees
        </h3>
        <div className={DashboardTheme.Dashboard_TotalFees}>
          {`£${numberWithCommas(totalFees)}`}
        </div>
      </div>
      <div className={DashboardTheme.Dashboard_ContinueIcon}>
        <div className={DashboardTheme.Dashboard_ContinueIcon_Inner}>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;