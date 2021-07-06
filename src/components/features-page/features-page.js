import React, { Component } from 'react';
import ReactSlider from 'react-slider';

import SmallPrint from '../small-print/small-print';

import AllocationCalculator from './allocation-calculator.module.scss';
import Layout from './layout.module.scss';
import Dividers from './dividers.module.scss';
import TextBlock from './text-block.module.scss';
import Points from './points.module.scss';
import AppBadges from './app-badges.module.scss';
import Graphics from './graphics.module.scss';
import Utilities from './utilities.module.scss';
import LinkedBullets from './linked-bullets.module.scss';
import ToolsPoints from './tools-points.module.scss';
import SubSections from './sub-sections.module.scss';
import Dots from './dots.module.scss';
import Leaves from './leaves.module.scss';

import pigIcon from './images/pig-icon.svg';
import topUpIcon from './images/top-up-icon.svg';
import roundUpIcon from './images/round-up-icon.svg';
import multipleContributionsIcon from './images/multiple-contributions-icon.svg';
import kidstartIcon from './images/kidstart-icon.svg';
import secondaryTickIcon from './images/secondary-tick-icon.svg';
import primaryTickIcon from './images/primary-tick-icon.svg';
import googlePlayBadge from './images/google-play-badge.png';
import appStoreBadge from './images/app-store-badge.png';
import allYourAccountsInOnePlace from './images/all-your-accounts-in-one-place.png'
import linkFamilyAndFriends from './images/link-family-and-friends.png'
import swapMessages from './images/swap-messages.png'
import toolsToMakeItEasyToSave from './images/tools-to-make-it-easy-to-save.png'

class AllocationCalculatorModule extends Component {
  state = {
    fundBalance: 60
  }

  fundHandler = (changedValue) => {
    this.setState({
      fundBalance: changedValue
    });
  }

  numbers = (number) => {
    switch(number) {
      case 80:
        return 1375
      case 70:
        return 1573
      case 60:
        return 1770
      case 50:
        return 1968
      case 40:
        return 2166
      case 30:
        return 2364
      case 20:
        return 2652
      case 10:
        return 2760
      case 0:
        return 2958
      default:
        break;
    }
  }

  render () {
    return (
      <div className={AllocationCalculator.Wrapper}>
        <div className={AllocationCalculator.Splits}>
          <div className={`${AllocationCalculator.Split} ${AllocationCalculator.Split_First}`}>
            <div className={AllocationCalculator.Split_Percentage}>{`${100 - this.state.fundBalance}%`}</div>
            <div className={AllocationCalculator.Split_Label}>Cash Fund</div>
          </div>
          <div className={`${AllocationCalculator.Split} ${AllocationCalculator.Split_Last}`}>
            <div className={AllocationCalculator.Split_Percentage}>{`${this.state.fundBalance}%`}</div>
            <div className={AllocationCalculator.Split_Label}>Share Fund</div>
          </div>
        </div>
        <div className={AllocationCalculator.Slider_Container}>
          <ReactSlider
            defaultValue={60}
            onChange={this.fundHandler}
            className={AllocationCalculator.Slider}
            step={10}
            max={100}
            min={20}
            thumbClassName={AllocationCalculator.Slider_Thumb}
            trackClassName={AllocationCalculator.Slider_Track}
            renderThumb={(props, state) => <div {...props}></div>}
          />
          <div className={AllocationCalculator.Slider_Steps}>
            <div className={AllocationCalculator.Slider_Step}>
            </div>
            <div className={AllocationCalculator.Slider_Step}>
            </div>
            <div className={AllocationCalculator.Slider_Step}>
            </div>
            <div className={AllocationCalculator.Slider_Step}>
            </div>
            <div className={AllocationCalculator.Slider_Step}>
            </div>
            <div className={AllocationCalculator.Slider_Step}>
            </div>
            <div className={AllocationCalculator.Slider_Step}>
            </div>
            <div className={AllocationCalculator.Slider_Step}>
            </div>
            <div className={AllocationCalculator.Slider_Step}>
            </div>
          </div>
          <div className={AllocationCalculator.Slider_Labels}>
            <div className={AllocationCalculator.Slider_Label}>
              Cash Fund
            </div>
            <div className={AllocationCalculator.Slider_Label}>
              Share Fund
            </div>
          </div>
        </div>
        <div className={AllocationCalculator.Results}>
          With this choice if you had invested <strong>£1000</strong> for Sarah, it would be worth <strong>{`£${this.numbers(100 - this.state.fundBalance)}`}</strong>
        </div>
      </div>
    );
  }
}

const FeaturesPage = () => {
  return (  
    <>
      <div className={`${Leaves.Container} ${Leaves.___Top}`}>
      </div>

      <div className={Layout.Sizer}>
        <section>
          <div className={`${TextBlock.Container} ${TextBlock.___Top} ${TextBlock.___Centred}`}>
            <h2 className={TextBlock._LargeHeading}>
              The easiest way to <br className={Utilities.BreakUpToTablet}/>save for your family
            </h2>
            <p className={TextBlock._Content}>
              The Beanstalk app is designed to make it really easy to build a nest egg for your children, grandchildren or even yourself. Whether your goal is to save £500 or £50,000 - we've packed it with some great tools and features to help.
            </p>
          </div>
        </section>

        <div className={SubSections._Wrapper}>
          <section className={`${Layout.Row} ${Layout.Row___SubSections} ${Layout.Row___SubSections___BottomOffset}`}>
            <div className={`${Layout.Column} ${Layout.Column___Gap}`}>
              <img className={`${Graphics.Graphic} ${Graphics.Graphic___SubSection} ${Graphics.Graphic___allYourAccountsInOnePlace}`} src={allYourAccountsInOnePlace} width="276" height="416" alt="All your accounts in one place"/>
            </div>
            <div className={`${Layout.Column} ${Layout.Column___Gap}`}>
              <div className={`${TextBlock.Container} ${TextBlock.___SubSection___Right} ${TextBlock.___SubSection} ${TextBlock.___SubSection___TopOffset}`}>
                <h2 className={TextBlock._SmallHeading}>
                  All your accounts in one place
                </h2>
                <p className={TextBlock._Content}>
                  See everyone you are saving for, how much they have and your contributions all within seconds
                </p>
              </div>
            </div>
          </section>

          <div className={Dots._Container}>
            <div className={`${Dots._Dot} ${Dots._Dot___Small}`}></div>
            <div className={`${Dots._Dot} ${Dots._Dot___Small}`}></div>
            <div className={`${Dots._Dot} ${Dots._Dot___Small}`}></div>
            <div className={`${Dots._Dot} ${Dots._Dot___Medium}`}></div>
            <div className={`${Dots._Dot} ${Dots._Dot___Large}`}></div>
            <div className={`${Dots._Dot} ${Dots._Dot___Medium}`}></div>
            <div className={`${Dots._Dot} ${Dots._Dot___Small}`}></div>
            <div className={`${Dots._Dot} ${Dots._Dot___Small}`}></div>
            <div className={`${Dots._Dot} ${Dots._Dot___Small}`}></div>
          </div>

          <div className={Layout.Sizer}>
            <section className={`${Layout.Row} ${Layout.Row___SubSections}`}>
              <div className={`${Layout.Column} ${Layout.Column___Gap} ${Layout.Column___Text}`}>
                <div className={`${TextBlock.Container} ${TextBlock.___SubSection___Left} ${TextBlock.___SubSection}`}>
                  <h2 className={TextBlock._SmallHeading}>
                    Link Family and friends
                  </h2>
                  <p className={TextBlock._Content}>
                    Invite grandparents and others to link to your children and they can save for your children through their own app.
                  </p>
                </div>
              </div>
              <div className={`${Layout.Column} ${Layout.Column___Gap} ${Layout.Column___Graphic}`}>
                <img className={`${Graphics.Graphic} ${Graphics.Graphic___SubSection} ${Graphics.Graphic___TopOffSetAtMobile} ${Graphics.Graphic___linkFamilyAndFriends}`} src={linkFamilyAndFriends} width="376" height="456" alt="Family and friends"/>
              </div>
            </section>
          </div>

          <div className={Dots._Container}>
            <div className={`${Dots._Dot} ${Dots._Dot___Small}`}></div>
            <div className={`${Dots._Dot} ${Dots._Dot___Small}`}></div>
            <div className={`${Dots._Dot} ${Dots._Dot___Small}`}></div>
            <div className={`${Dots._Dot} ${Dots._Dot___Medium}`}></div>
            <div className={`${Dots._Dot} ${Dots._Dot___Large}`}></div>
            <div className={`${Dots._Dot} ${Dots._Dot___Medium}`}></div>
            <div className={`${Dots._Dot} ${Dots._Dot___Small}`}></div>
            <div className={`${Dots._Dot} ${Dots._Dot___Small}`}></div>
            <div className={`${Dots._Dot} ${Dots._Dot___Small}`}></div>
          </div>

          <div className={Layout.Sizer}>
            <section className={`${Layout.Row} ${Layout.Row___SubSections}`}>
              <div className={`${Layout.Column} ${Layout.Column___Gap} ${Layout.Column___Graphic}`}>
                <img className={`${Graphics.Graphic} ${Graphics.Graphic___SubSection} ${Graphics.Graphic___TopOffSetAtMobile} ${Graphics.Graphic___swapMessages}`} src={swapMessages} width="335" height="483" alt="Swap messages"/>
              </div>
              <div className={`${Layout.Column} ${Layout.Column___Gap} ${Layout.Column___Text}`}>
                <div className={`${TextBlock.Container} ${TextBlock.___SubSection___Last} ${TextBlock.___SubSection___Right} ${TextBlock.___SubSection}`}>
                  <h2 className={TextBlock._SmallHeading}>
                    Swap messages
                  </h2>
                  <p className={TextBlock._Content}>
                    Send messages with your gifts of<br className={Utilities.BreakAtTablet}/> money so they know what it's for!
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className={Dividers.Divider_Wrapper}>
        <div className={Dividers.Divider}>
        </div>
      </div>

      <div className={Layout.Sizer}>
        <section>
          <div className={`${TextBlock.Container} ${TextBlock.___Large} ${TextBlock.___Centred}`}>
            <h2 className={TextBlock._LargeHeading}>
              Start small
            </h2>
            <p className={TextBlock._Content}>
              We don't require a contribution to open a child account.* <br className={Utilities.BreakAtTablet}/>Top up or create regular contributions if and when you want to.
            </p>
          </div>
        </section>
      </div>

      <div className={Layout.Sizer}>
        <section className={`${ToolsPoints._Section}`}>
          <div className={`${TextBlock.Container} ${TextBlock.___Centred} ${ToolsPoints._Header}`}>
            <h2 className={TextBlock._LargeHeading}>
              Tools to make it<br className={Utilities.BreakUpToTablet}/> easy to save
            </h2>
          </div>

          <div className={Layout.Row}>
            <div className={`${Layout.Column} ${ToolsPoints.Column___First}`}>
              <div className={ToolsPoints._Container}>

                <div className={`${Points.Point} ${ToolsPoints._Point} ${Points.Point___Large}`}>
                  <div className={`${Points.Point_Roundel}`}>
                    <img src={kidstartIcon} width="22" height="23" alt="KidStart icon"/>
                  </div>
                  <div className={`${Points.Point_Content}`}>
                    Collect free money back on your shopping automatically shared between your children
                  </div>
                </div>

                <div className={`${Points.Point} ${ToolsPoints._Point} ${Points.Point___Large}`}>
                  <div className={`${Points.Point_Roundel}`}>
                    <img src={roundUpIcon} width="22" height="22" alt="Round-up icon"/>
                  </div>
                  <div className={`${Points.Point_Content}`}>
                    Round up your purchases<br className={Utilities.BreakAtTablet}/> to save little and often
                  </div>
                </div>

                <div className={`${Points.Point} ${ToolsPoints._Point} ${Points.Point___Large}`}>
                  <div className={`${Points.Point_Roundel}`}>
                    <img src={topUpIcon} width="22" height="22" alt="Top-up icon"/>
                  </div>
                  <div className={`${Points.Point_Content}`}>
                    Top-up or make gifts when you want,<br className={Utilities.BreakAtDesktop}/> at the touch of a button
                  </div>
                </div>

                <div className={`${Points.Point} ${ToolsPoints._Point} ${Points.Point___Large}`}>
                  <div className={`${Points.Point_Roundel}`}>
                    <img src={pigIcon} width="24" height="24" alt="Pig icon"/>
                  </div>
                  <div className={`${Points.Point_Content}`}>
                    Set up a regular savings plan <br className={Utilities.BreakAtTablet}/>if you want to
                  </div>
                </div>

                <div className={`${Points.Point} ${ToolsPoints._Point} ${Points.Point___Large} ${Points.Point___Last}`}>
                  <div className={`${Points.Point_Roundel}`}>
                    <img src={multipleContributionsIcon} width="24" height="22" alt="Family icon"/>
                  </div>
                  <div className={`${Points.Point_Content}`}>
                    Boost your kids savings with multiple people contributing
                  </div>
                </div>

              </div>
            </div>

            <div className={`${Layout.Column} ${ToolsPoints.Column___Second}`}>
              <img className={`${Graphics.Graphic} ${ToolsPoints._Graphic}`} src={toolsToMakeItEasyToSave} width="340" height="612" alt="Screenshot of beanstalk app showing allocation"/>
            </div>
          </div>
        </section>
      </div>

      <div className={Dividers.Divider_Wrapper}>
        <div className={Dividers.Divider}>
        </div>
      </div>

      <div className={Layout.Sizer}>
        <section>
          <div className={`${TextBlock.Container} ${AllocationCalculator._Heading} ${TextBlock.___Centred}`}>
            <h2 className={`${TextBlock._LargeHeading}`}>
              Designed to help grow your family's savings
            </h2>
          </div>
          <AllocationCalculatorModule/>

          <div className={Points.TriplePoints}>
            <div className={Points.TriplePoints_Column}>
              <div className={`${Points.Point} ${Points.Point___large} ${Points.Point___Triple}`}>
                <div className={`${Points.Point_Roundel} ${Points.Point_Roundel___Triple}`}>
                  <img src={secondaryTickIcon} width="16" height="12" alt="Tick icon"/>
                </div>
                <div className={`${Points.Point_Content}`}>
                  Stocks and shares junior and adult ISAs so income and gains tax free
                </div>
              </div>
            </div>
            <div className={Points.TriplePoints_Column}>
              <div className={`${Points.Point} ${Points.Point___large} ${Points.Point___Triple}`}>
                <div className={`${Points.Point_Roundel} ${Points.Point_Roundel___Triple}`}>
                  <img src={secondaryTickIcon} width="16" height="12" alt="Tick icon"/>
                </div>
                <div className={`${Points.Point_Content}`}>
                  Choose to allocate your savings between a cash and shares fund with our unique slider tool
                </div>
              </div>
            </div>
            <div className={Points.TriplePoints_Column}>
              <div className={`${Points.Point} ${Points.Point___large} ${Points.Point___Triple} ${Points.Point___Triple___Last}`}>
                <div className={`${Points.Point_Roundel} ${Points.Point_Roundel___Triple}`}>
                  <img src={secondaryTickIcon} width="16" height="12" alt="Tick icon"/>
                </div>
                <div className={`${Points.Point_Content}`}>
                  Low cost index tracker funds from <a href="/docs/Fidelity-Index-World-KIID.pdf" target="_blank" rel="noopener noreferrer">Fidelity</a> and <a href="/docs/LG-Cash-Trust-KIID.pdf" target="_blank" rel="noopener noreferrer">L&G</a> so less taken away in fees
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>      

      <div className={Layout.Sizer}>
        <section>
          <div className={`${TextBlock.Container} ${TextBlock.___Large} ${TextBlock.___Centred}`}>
            <h2 className={TextBlock._LargeHeading}>
              Great value
            </h2>
            <p className={TextBlock._Content}>
              The app is free to use with no fixed monthly or minimum fees. <br className={Utilities.BreakAtTablet}/>Our annual fee is just 0.5% of account value.
            </p>
          </div>
        </section>

        <section>
          <div className={`${TextBlock.Container} ${TextBlock.___Large} ${TextBlock.___Centred} ${TextBlock.___SafeAndSecure}`}>
            <h2 className={TextBlock._LargeHeading}>
              Safe and secure
            </h2>
            <p className={TextBlock._Content}>
              Beanstalk is FCA regulated and your money and investments are held under FCA client money and custody rules by our authorised investment platform provider. Your investments are covered up to £85,000 under the Financial Services Compensation Scheme.
            </p>
          </div>
        </section>
      </div>

      <div className={Dividers.Divider_Wrapper}>
        <div className={Dividers.Divider}>
        </div>
      </div>

      <div className={Layout.Sizer}>
        <section>
          <div className={`${TextBlock._Container} ${LinkedBullets._Header} ${TextBlock.___Centred}`}>
            <h2 className={TextBlock._LargeHeading}>
              It's easy to get started
            </h2>
            <p className={TextBlock._Content}>
              No trip to the bank necessary!
            </p>
          </div>

          <div className={LinkedBullets._Container}>
            <div className={LinkedBullets.LinkedBullet}>
              <div className={LinkedBullets.LinkedBullet_Roundel}>
                1
              </div>
              <div className={LinkedBullets.LinkedBullet_content}>
                <h3 className={LinkedBullets.LinkedBullet_Heading}>
                  Download the app
                </h3>
                <p className={LinkedBullets.LinkedBullet_Description}>
                  On play store or app store
                </p>
              </div>
            </div>

            <div className={LinkedBullets.LinkedBullet}>
              <div className={LinkedBullets.LinkedBullet_Roundel}>
                2
              </div>
              <div className={LinkedBullets.LinkedBullet_content}>
                <h3 className={LinkedBullets.LinkedBullet_Heading}>
                  Set up your profile
                </h3>
                <p className={LinkedBullets.LinkedBullet_Description}>
                  We just need your name, date of birth and address.
                </p>
              </div>
            </div>

            <div className={LinkedBullets.LinkedBullet}>
              <div className={LinkedBullets.LinkedBullet_Roundel}>
                3
              </div>
              <div className={LinkedBullets.LinkedBullet_content}>
                <h3 className={LinkedBullets.LinkedBullet_Heading}>
                  Tell us who you are saving for
                </h3>
                <p className={LinkedBullets.LinkedBullet_Description}>
                  You and/or as many children as you would like
                </p>
              </div>
            </div>

            <div className={`${LinkedBullets.LinkedBullet}`}>
              <div className={`${LinkedBullets.LinkedBullet_Roundel}`}>
                4
              </div>
              <div className={LinkedBullets.LinkedBullet_content}>
                <h3 className={LinkedBullets.LinkedBullet_Heading}>
                  Choose how you would like your savings allocated
                </h3>
                <p className={LinkedBullets.LinkedBullet_Description}>
                  You can change at any time
                </p>
              </div>
            </div>

            <div className={`${LinkedBullets.LinkedBullet} ${LinkedBullets.LinkedBullet___Last}`}>
              <div className={`${LinkedBullets.LinkedBullet_Roundel} ${LinkedBullets.LinkedBullet_Roundel___Last}`}>
                <img src={primaryTickIcon} width="16" height="12" alt="Tick icon"/>
              </div>
              <div className={LinkedBullets.LinkedBullet_content}>
                <h3 className={LinkedBullets.LinkedBullet_Heading}>
                  You're ready to go
                </h3>
                <p className={LinkedBullets.LinkedBullet_Description}>
                  We'll do the checks required in the background and you can start putting money aside when you are ready
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className={`${Dividers.Divider_Wrapper} ${Dividers.Divider_Wrapper___vFlipped}`}>
        <div className={`${Dividers.Divider} ${Dividers.Divider___vFlipped}`}>
        </div>
      </div>

      <div className={Layout.Sizer}>
        <section className={Layout.Bottom}>
          <h2 className={TextBlock.Bottom_CTA}> 
            We are bringing child savings into the 21st Century. Join the revolution in as little as 5 minutes.
          </h2>

          <div className={AppBadges.Container}>
            <div className={`${AppBadges._BadgeWrapper} ${AppBadges._BadgeWrapper___First}`}>
              <a href="https://smart.link/nayw9a5wruuts?site_id=iosfeatures" target="_blank" rel="noreferrer">
                <img className={AppBadges._Badge} src={appStoreBadge} width="135" height="40" alt="Apple app store badge"/>
              </a>
            </div>
            <div className={`${AppBadges._BadgeWrapper} ${AppBadges._BadgeWrapper___Last}`}>
              <a href="https://smart.link/i0x4v7cw1rb98?site_id=andrfeatures" target="_blank" rel="noreferrer">
                <img className={AppBadges._Badge} src={googlePlayBadge} width="135" height="40" alt="Google Play store badge"/>
              </a>
            </div>
          </div>

          <div className={`${Leaves.Container} ${Leaves.___Bottom} ${Leaves.___vFlipped}`}>
          </div>
        </section>
      </div>
      <SmallPrint>
        <p>
          *JUST £10 FOR AN ADULT ACCOUNT
        </p>
      </SmallPrint>

    </>
  );
};

export default FeaturesPage;