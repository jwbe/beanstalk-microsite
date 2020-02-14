import React, { Component } from 'react';
import styles from './fund-balance.module.scss';
import ReactSlider from 'react-slider';
import Iphone from '../iphone/iphone';

class FundBalance extends Component {
  state = {
    fundBalance: 50
  }

  fundHandler = (changedValue) => {
    this.setState({
      fundBalance: changedValue
    });
  }

  render () {
    return (
      <>
        <div className={styles.FundBalance_iPhone_wrapper}>
          <Iphone className={styles.FundBalance_iPhone}>
            <div className={styles.FundBalance_phoneSizer}>
              <div className={styles.FundBalance_Header}>
                <div className={styles.FundBalance_Header_iphoneBar}>
                </div>
                <div className={styles.FundBalance_Header_title}>
                  How would you like your savings invested?
                </div>
              </div>
              <div className={styles.FundBalance_split_container}>
                <div className={styles.FundBalance_split}>
                  <div className={styles.FundBalance_split_header}>{`${this.state.fundBalance}`}</div>
                  <div className={styles.FundBalance_split_description}>Cash Fund</div>
                </div>
                <div className={styles.FundBalance_split}>
                  <div className={styles.FundBalance_split_header}>{`${100 - this.state.fundBalance}`}</div>
                  <div className={styles.FundBalance_split_description}>Share Fund</div>
                </div>
              </div>
              <div className={styles.FundBalance_slider_container}>
                <ReactSlider
                  defaultValue={50}
                  onChange={this.fundHandler}
                  className={styles.FundBalance_slider}
                  step={10}
                  thumbClassName={styles.FundBalance_slider_thumb}
                  trackClassName={styles.FundBalance_slider_track}
                  renderThumb={(props, state) => <div {...props}></div>}
                />
                <div className={styles.FundBalance_slider_steps}>
                  <div className={styles.FundBalance_slider_step}>
                  </div>
                  <div className={styles.FundBalance_slider_step}>
                  </div>
                  <div className={styles.FundBalance_slider_step}>
                  </div>
                  <div className={styles.FundBalance_slider_step}>
                  </div>
                  <div className={styles.FundBalance_slider_step}>
                  </div>
                  <div className={styles.FundBalance_slider_step}>
                  </div>
                  <div className={styles.FundBalance_slider_step}>
                  </div>
                  <div className={styles.FundBalance_slider_step}>
                  </div>
                  <div className={styles.FundBalance_slider_step}>
                  </div>
                  <div className={styles.FundBalance_slider_step}>
                  </div>
                  <div className={styles.FundBalance_slider_step}>
                  </div>
                </div>
                <div className={styles.FundBalance_slider_steps_labels}>
                  <div className={styles.FundBalance_slider_steps_label}>
                    Cash Fund
                  </div>
                  <div className={styles.FundBalance_slider_steps_label}>
                    Share Fund
                  </div>
                </div>
              </div>
              <p className={styles.FundBalance_slider_summary}>
                With this choice if you had invested £1000, it would be worth £2500
              </p>
              <div className={styles.FundBalance_slider_buttons}>
                <div className={styles.FundBalance_slider_button_confirm}>
                  Confirm
                </div>
                <div className={styles.FundBalance_slider_button_cancel}>
                  Cancel
                </div>
              </div>
            </div>
          </Iphone>
        </div>
      </>
    );
  }
};

export default FundBalance;