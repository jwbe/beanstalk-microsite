import React from 'react';
import Theme from './divider.module.scss';

const Divider = ({
  dividerDefaultOnMobile
}) => (
  <div className={`${Theme.Divider_Wrapper} ${dividerDefaultOnMobile ? Theme.Divider_Wrapper___dividerDefaultOnMobile : null}`}>
    <div className={Theme.Divider_Leaves}>
    </div>
    <div className={Theme.Divider}>
    </div>
  </div>
)

export default Divider;