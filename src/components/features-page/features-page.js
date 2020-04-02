import React from 'react';
import styles from './features-page.module.scss';
import ReactSlider from 'react-slider';

import googlePlayBadge from './images/google-play-badge.png';
import appStoreBadge from './images/app-store-badge.png';

import allYourAccountsInOnePlace from './images/all-your-accounts-in-one-place.png'
import linkFamilyAndFriends from './images/link-family-and-friends.png'
import roundUps from './images/round-ups.png'
import swapMessages from './images/swap-messages.png'

import toolsToMakeItEasyToSave from './images/tools-to-make-it-easy-to-save.png'

const FeaturesPage = () => {
  return (  
    <>
      <div className={`${styles.Leaves} ${styles.Leaves___Top}`}>
      </div>
      <section>
        <div className={`${styles.TextBlock} ${styles.TextBlock___Top} ${styles.TextBlock___Centred}`}>
          <h2 className={styles.TextBlock_LargeHeading}>
            The easiest way to save for your family
          </h2>
          <p className={styles.TextBlock_Content}>
            The Beanstalk app is designed to make it really easy to build a nest egg for your children, grandchildren or even yourself. Whether your goal is to save £500 or £50,000, we’ve packed it with some great tools and features to help.
          </p>
        </div>
      </section>

      <section className={`${styles.Row} ${styles.Row___SubSections}`}>
        <div className={`${styles.Column} ${styles.Column___Gap}`}>
          <img className={`${styles.Graphic} ${styles.Graphic___allYourAccountsInOnePlace}`} src={allYourAccountsInOnePlace} width="253" height="368"/>
        </div>
        <div className={`${styles.Column} ${styles.Column___Gap}`}>
          <div className={`${styles.TextBlock} ${styles.TextBlock___SubSection___Right} ${styles.TextBlock___Small}`}>
            <h2 className={styles.TextBlock_SmallHeading}>
              All your accounts <br className={styles.BreakUptoDesktop}/>in one place
            </h2>
            <p className={styles.TextBlock_Content}>
              See everyone you are saving for, <br className={styles.BreakAtTabletOnly}/>how much they have and your <br className={styles.BreakUptoDesktop}/> contributions all within seconds
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.Row} ${styles.Row___SubSections}`}>
        <div className={`${styles.Column} ${styles.Column___Gap} ${styles.Column___Text}`}>
          <div className={`${styles.TextBlock} ${styles.TextBlock___SubSection___Left} ${styles.TextBlock___Small}`}>
            <h2 className={styles.TextBlock_SmallHeading}>
              Link Family and friends
            </h2>
            <p className={styles.TextBlock_Content}>
              Invite grandparents and others to<br className={styles.BreakAtTabletOnly}/> link  <br className={styles.BreakAtLargeDesktop}/>to your children and they can save for your children <br className={styles.BreakAtLargeDesktop}/>through their own app.
            </p>
          </div>
        </div>
        <div className={`${styles.Column} ${styles.Column___Gap} ${styles.Column___Graphic}`}>
          <img className={`${styles.Graphic} ${styles.Graphic___linkFamilyAndFriends}`} src={linkFamilyAndFriends} width="379" height="453"/>
        </div>
      </section>

      <section className={`${styles.Row} ${styles.Row___SubSections}`}>
        <div className={`${styles.Column} ${styles.Column___Gap} ${styles.Column___Graphic}`}>
          <img className={`${styles.Graphic} ${styles.Graphic___swapMessages}`} src={swapMessages} width="335" height="485"/>
        </div>
        <div className={`${styles.Column} ${styles.Column___Gap} ${styles.Column___Text}`}>
          <div className={`${styles.TextBlock} ${styles.TextBlock___SubSection___Right} ${styles.TextBlock___Small}`}>
            <h2 className={styles.TextBlock_SmallHeading}>
              Swap messages
            </h2>
            <p className={styles.TextBlock_Content}>
              Send messages with your gifts of money so they know what it's for!
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.Row} ${styles.Row___SubSections}`}>
        <div className={`${styles.Column} ${styles.Column___Gap} ${styles.Column___Text}`}>
          <div className={`${styles.TextBlock} ${styles.TextBlock___SubSection___Left} ${styles.TextBlock___Small}`}>
            <h2 className={styles.TextBlock_SmallHeading}>
              Round ups
            </h2>
            <p className={styles.TextBlock_Content}>
              Round you up your purchases  <br className={styles.BreakAtLargeDesktop}/>to save little and often
            </p>
          </div>
        </div>
        <div className={`${styles.Column} ${styles.Column___Gap} ${styles.Column___Graphic}`}>
          <img className={`${styles.Graphic} ${styles.Graphic___roundUps}`} src={roundUps} width="341" height="262"/>
        </div>
      </section>

      <div className={styles.Divider}>
      </div>

      <section>
        <div className={`${styles.TextBlock} ${styles.TextBlock___Large} ${styles.TextBlock___Centred}`}>
          <h2 className={styles.TextBlock_LargeHeading}>
            Start small
          </h2>
          <p className={styles.TextBlock_Content}>
            We don’t require a contribution required to open a child account.*  <br className={styles.BreakAtDesktop}/>Top up or create regular contributions if and when you want to.
          </p>
        </div>
      </section>

      <section>
        <div className={`${styles.TextBlock} ${styles.TextBlock___designedToHelpGrowYourFamilysSavings} ${styles.TextBlock___Centred}`}>
          <h2 className={styles.TextBlock_LargeHeading}>
            Tools to make <br className={styles.BreakAtMobile}/>it easy to save
          </h2>
        </div>

        <div className={styles.Row}>
          <div className={styles.Column}>
            <div className={styles.ToolsPoints}>
              <div className={`${styles.Point} ${styles.Point___Large}`}>
                <div className={`${styles.Point_Roundel}`}></div>
                <div className={`${styles.Point_Content}`}>
                  Boost your kids savings with <br className={styles.BreakAtTabletOnly}/>multiple <br className={styles.BreakAtDesktop}/>people contributing
                </div>
              </div>

              <div className={`${styles.Point} ${styles.Point___Large}`}>
                <div className={`${styles.Point_Roundel}`}></div>
                <div className={`${styles.Point_Content}`}>
                  Collect free moneyback on your shopping <br className={styles.BreakAtLargeDesktop}/>automatically shared <br className={styles.BreakAtTabletOnly}/>between your children
                </div>
              </div>

              <div className={`${styles.Point} ${styles.Point___Large}`}>
                <div className={`${styles.Point_Roundel}`}></div>
                <div className={`${styles.Point_Content}`}>
                  Top-up or make gifts when you want,  <br className={styles.BreakAtDesktop}/>at the touch of a button
                </div>
              </div>

              <div className={`${styles.Point} ${styles.Point___Large}`}>
                <div className={`${styles.Point_Roundel}`}></div>
                <div className={`${styles.Point_Content}`}>
                  Set up a regular savings plan <br className={styles.BreakAtDesktop}/>if you want to
                </div>
              </div>

              <div className={`${styles.Point} ${styles.Point___Large} ${styles.Point___Last}`}>
                <div className={`${styles.Point_Roundel}`}></div>
                <div className={`${styles.Point_Content}`}>
                  Round you up your purchases <br className={styles.BreakAtDesktop}/>to save little and often
                </div>
              </div>
            </div>
          </div>

          <div className={styles.Column}>
            <img className={`${styles.Graphic} ${styles.Graphic___toolsToMakeItEasyToSave}`} src={toolsToMakeItEasyToSave} width="340" height="612"/>
          </div>
        </div>

      </section>

      <div className={styles.Divider}>
      </div>

      <section>
        <div className={`${styles.TextBlock} ${styles.TextBlock___designedToHelpGrowYourFamilysSavings}  ${styles.TextBlock___Centred}`}>
          <h2 className={styles.TextBlock_LargeHeading}>
            Designed to help grow your family's savings
          </h2>
        </div>

        <div className={styles.AllocationCalculator}>
          <div className={styles.AllocationCalculator_Splits}>
            <div className={`${styles.AllocationCalculator_Split} ${styles.AllocationCalculator_Split_First}`}>
              <div className={styles.AllocationCalculator_Split_Percentage}>80%</div>
              <div className={styles.AllocationCalculator_Split_Label}>Cash Fund</div>
            </div>
            <div className={`${styles.AllocationCalculator_Split} ${styles.AllocationCalculator_Split_Last}`}>
              <div className={styles.AllocationCalculator_Split_Percentage}>20%</div>
              <div className={styles.AllocationCalculator_Split_Label}>Share Fund</div>
            </div>
          </div>
          <div className={styles.AllocationCalculator_Slider_Container}>
            <ReactSlider
              defaultValue={50}
              className={styles.AllocationCalculator_Slider}
              step={10}
              thumbClassName={styles.AllocationCalculator_Slider_Thumb}
              trackClassName={styles.AllocationCalculator_Slider_Track}
              renderThumb={(props, state) => <div {...props}></div>}
            />
            <div className={styles.AllocationCalculator_Slider_Steps}>
              <div className={styles.AllocationCalculator_Slider_Step}>
              </div>
              <div className={styles.AllocationCalculator_Slider_Step}>
              </div>
              <div className={styles.AllocationCalculator_Slider_Step}>
              </div>
              <div className={styles.AllocationCalculator_Slider_Step}>
              </div>
              <div className={styles.AllocationCalculator_Slider_Step}>
              </div>
              <div className={styles.AllocationCalculator_Slider_Step}>
              </div>
              <div className={styles.AllocationCalculator_Slider_Step}>
              </div>
              <div className={styles.AllocationCalculator_Slider_Step}>
              </div>
              <div className={styles.AllocationCalculator_Slider_Step}>
              </div>
              <div className={styles.AllocationCalculator_Slider_Step}>
              </div>
              <div className={styles.AllocationCalculator_Slider_Step}>
              </div>
            </div>
            <div className={styles.AllocationCalculator_Slider_Labels}>
              <div className={styles.AllocationCalculator_Slider_Label}>
                Cash Fund
              </div>
              <div className={styles.AllocationCalculator_Slider_Label}>
                Share Fund
              </div>
            </div>
          </div>
          <div className={styles.AllocationCalculator_Results}>
            With this choice if you had invested <strong>£1000</strong> for Sarah, it would be worth <strong>£2500</strong>
          </div>
        </div>

        <div className={styles.HorizontalPoints}>
          <div className={styles.HorizontalPoints_Column}>
            <div className={`${styles.Point} ${styles.Point___large} ${styles.Point___Horizontal}`}>
              <div className={`${styles.Point_Roundel} ${styles.Point_Roundel___Horizontal}`}></div>
              <div className={`${styles.Point_Content}`}>
                Stocks and shares junior and adult ISA so income and gains tax free
              </div>
            </div>
          </div>
          <div className={styles.HorizontalPoints_Column}>
            <div className={`${styles.Point} ${styles.Point___large} ${styles.Point___Horizontal}`}>
              <div className={`${styles.Point_Roundel} ${styles.Point_Roundel___Horizontal}`}></div>
              <div className={`${styles.Point_Content}`}>
                Choose to allocate your savings between a cash and shares fund with our unique slider tool
              </div>
            </div>
          </div>
          <div className={styles.HorizontalPoints_Column}>
            <div className={`${styles.Point} ${styles.Point___large} ${styles.Point___Horizontal} ${styles.Point___Horizontal___Last}`}>
              <div className={`${styles.Point_Roundel} ${styles.Point_Roundel___Horizontal}`}></div>
              <div className={`${styles.Point_Content}`}>
                Low cost index tracker funds from Fidelity and L&G so less taken away in fees
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className={`${styles.TextBlock} ${styles.TextBlock___Large} ${styles.TextBlock___Centred}`}>
          <h2 className={styles.TextBlock_LargeHeading}>
            Great value
          </h2>
          <p className={styles.TextBlock_Content}>
            The app is free to use with no fixed monthly or minimum fees.  <br className={styles.BreakAtDesktop}/>Our annual fee is just 0.5% of account value.
          </p>
        </div>
      </section>

      <section>
        <div className={`${styles.TextBlock} ${styles.TextBlock___Large} ${styles.TextBlock___Centred}`}>
          <h2 className={styles.TextBlock_LargeHeading}>
            Safe and secure
          </h2>
          <p className={styles.TextBlock_Content}>
            Beanstalk is FCA regulated and your money and investments held under  FCA client money and custody rules by our authorised invesment platform provider.  Your investments are covered up to £85,000 under the Financial Services Compensation Scheme.
          </p>
        </div>
      </section>

      <div className={styles.Divider}>
      </div>

      <section>

        <div className={`${styles.TextBlock} ${styles.TextBlock___itsEasyToGetStarted} ${styles.TextBlock___Centred}`}>
          <h2 className={styles.TextBlock_LargeHeading}>
            It's easy to get started
          </h2>
          <p className={styles.TextBlock_Content}>
            No trip to the bank necessary!
          </p>
        </div>

        <div className={styles.LinkedBullets}>
          <div className={styles.LinkedBullet}>
            <div className={styles.LinkedBullet_Roundel}>
              1
            </div>
            <div className={styles.LinkedBullet_content}>
              <h3 className={styles.LinkedBullet_Heading}>
                Download the app
              </h3>
              <p className={styles.LinkedBullet_Description}>
                On play store or app store
              </p>
            </div>
          </div>

          <div className={styles.LinkedBullet}>
            <div className={styles.LinkedBullet_Roundel}>
              2
            </div>
            <div className={styles.LinkedBullet_content}>
              <h3 className={styles.LinkedBullet_Heading}>
                Set up your profile
              </h3>
              <p className={styles.LinkedBullet_Description}>
                We just need your name,  date of birth and address.
              </p>
            </div>
          </div>

          <div className={styles.LinkedBullet}>
            <div className={styles.LinkedBullet_Roundel}>
              3
            </div>
            <div className={styles.LinkedBullet_content}>
              <h3 className={styles.LinkedBullet_Heading}>
                Tell us who you are saving for
              </h3>
              <p className={styles.LinkedBullet_Description}>
                You and /or as many children  as your would like
              </p>
            </div>
          </div>

          <div className={`${styles.LinkedBullet} ${styles.LinkedBullet___Last}`}>
            <div className={`${styles.LinkedBullet_Roundel} ${styles.LinkedBullet_Roundel___last}`}>
              4
            </div>
            <div className={styles.LinkedBullet_content}>
              <h3 className={styles.LinkedBullet_Heading}>
                Choose how you would  like your savings allocated
              </h3>
              <p className={styles.LinkedBullet_Description}>
                You can change at any time
              </p>
            </div>
          </div>

        </div>
      </section>

      <div className={`${styles.Divider} ${styles.Divider___vFlipped}`}>
      </div>

      <section className={styles.Bottom}>
        <h2 className={styles.Bottom_CTA}> 
          We are bringing child savings into the 21st Century. <br className={styles.BreakAtLargeDesktop}/> 
          Join the revolution in as little as 5 minutes.
        </h2>

        <div className={styles.AppBadges}>
          <div className={`${styles.AppBadges_BadgeWrapper} ${styles.AppBadges_BadgeWrapper___first}`}>
            <a href="https://apps.apple.com/gb/app/beanstalk-save-invest/id1470619597" target="_blank">
              <img className={styles.AppBadges_Badge} src={appStoreBadge} width="135" height="40" alt="Apple app store badge"/>
            </a>
          </div>
          <div className={`${styles.AppBadges_BadgeWrapper} ${styles.AppBadges_BadgeWrapper___last}`}>
            <a href="https://play.google.com/store/apps/details?id=com.beanstalk" target="_blank">
              <img className={styles.AppBadges_Badge} src={googlePlayBadge} width="135" height="40" alt="Google Play store badge"/>
            </a>
          </div>
        </div>

        <div className={`${styles.Leaves} ${styles.Leaves___vFlipped}`}>
        </div>
      </section>



      <section>
        <p className={styles.SmallPrint}>
          AS WITH ANY INVESTMENT THE VALUE CAN GO DOWN AS WELL AS UP. PAST PERFORMANCE IS NO INDICATOR OF FUTURE PERFORMANCE.  THE TAX TREATMENT OF ISAS DEPENDS ON YOUR INDIVIDUAL CIRCUMSTANCES AND MAY BE SUBJECT TO CHANGE IN THE FUTURE.
        </p>
        <p className={styles.SmallPrint}>
          *JUST £10 FOR AN ADULT ACCOUNT
        </p>
      </section>
    </>
  );
};

export default FeaturesPage;