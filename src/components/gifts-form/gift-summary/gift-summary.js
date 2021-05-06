import React from 'react';
import Theme from './gift-summary.module.scss';

const GiftSummary = (props) => {
  let { giftAmount, giftMessage } = props;

  return (
    <aside className={Theme.Container}>
      <div className={Theme.StickyWrapper}>
        <h4 className={Theme.Heading}>
          Gift summary
        </h4>
        <div className={Theme.Card}>
          <div className={`${Theme.Row} ${Theme.Row___GiftAmount}`}>
            <span className={`${Theme.Subheading} ${Theme.Subheading___GiftAmount}`}>Gift</span>
            <span className={Theme.Currency}>£</span>
            <span className={Theme.GiftAmount}>
              { new Intl.NumberFormat('en-UK', {
                currency: "GBP",
                style: "currency",
                minimumFractionDigits: 0
              }).format(giftAmount) }
            </span>
          </div>
          <div className={Theme.Row}>
            <span className={Theme.Subheading}>Message</span>
            <div className={Theme.GiftMessage}>{ giftMessage }</div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default GiftSummary;