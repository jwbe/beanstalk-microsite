import React from 'react';
import Theme from './step.module.scss';

const Step = (props) => {
  let { thumbnail, copy } = props;

  return (
    <div className={Theme.Container}>
      <div className={Theme.Thumbnail}>
        <div className={Theme.Thumbnail_Inner}>
          <img src={thumbnail}/>
        </div>
      </div>
      <div className={Theme.Copy}>
        { copy }
      </div>
    </div>
  )

}

export default Step;