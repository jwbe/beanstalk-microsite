import React from 'react';
import { Link } from 'gatsby';
import Theme from './footer.module.scss';
import Heading from './heading/heading';
import Social from './social/social';

import KidStartFamily from '../kidstart-family/kidstart-family';
import SmallPrint from '../small-print/small-print';

const TEXT_SMALL_PRINT = 'AS WITH ANY INVESTMENT THE VALUE CAN GO DOWN AS WELL AS UP. PAST PERFORMANCE IS NO INDICATOR OF FUTURE PERFORMANCE. THE TAX TREATMENT OF ISAS DEPENDS ON YOUR INDIVIDUAL CIRCUMSTANCES AND MAY BE SUBJECT TO CHANGE IN THE FUTURE.'

const Footer = ({
  isKidStartFamily
}) => {
  return (
    <> 
      <SmallPrint>
        <p>
          { TEXT_SMALL_PRINT }
        </p>
      </SmallPrint>

      { isKidStartFamily &&  <KidStartFamily/> }
      

      <footer className={Theme.Container}>
        <div className={Theme.Container_Inner}>
          <div className={Theme.Content}>
            <div className={Theme.Columns}>
              <div className={`${Theme.Column} ${Theme.First}`}>
                <div className={Theme.Column_Wrapper}>
                  <Heading>
                    Beanstalk
                  </Heading>
                  <ul className={Theme.Navigation}>
                    <li>
                      <Link to="/beanstalk-calculator">
                        What If tool
                      </Link>
                    </li>
                    <li>
                      <Link to="/designed-for-growth">
                        Designed for Growth
                      </Link>
                    </li>
                    <li>
                      <Link to="/articles">
                        Knowledge Base
                      </Link>
                    </li>
                    <li>
                      <Link to="/guides/jisa-guide">
                        Junior ISA Guide
                      </Link>
                    </li>
                    <li>
                      <Link to="/faqs">
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link to="/support">
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-beanstalk">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact-us">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`${Theme.Column} ${Theme.Second}`}>
                <div className={`${Theme.Column_Wrapper} ${Theme.Second}`}>
                  <Heading>
                    Get Beanstalk
                  </Heading>
                  <div className={Theme.Badges}>
                    <a className={`${Theme.Badge} ${Theme.AppleAppStore}`} href="https://apps.apple.com/gb/app/beanstalk-save-for-your-kids/id1470619597" target="_blank" rel="noreferrer">
                    </a>
                    <a className={`${Theme.Badge} ${Theme.GooglePlayStore}`} href="https://play.google.com/store/apps/details?id=com.beanstalk" target="_blank" rel="noreferrer">
                    </a>
                  </div>
                </div>
                <div className={`${Theme.Social} ${Theme.SocialOnDesktopOnly}`}>
                  <Social/>
                </div>
              </div>
            </div>
            <div className={`${Theme.Social} ${Theme.SocialOnMobileOnly}`}>
              <Social/>
            </div>
            <div className={Theme.Bottom}>
              <div className={Theme.Logo}>
              </div>
              <p className={Theme.SmallPrint}>
                Beanstalk is a trading name of KidStart Limited. KidStart Limited is authorised and regulated by the Financial Conduct Authority. Our FCA number is 473606. See <a href='http://www.fca.org.uk' target="_blank" rel="noreferrer">http://www.fca.org.uk</a> for more information. View our <Link to='/data-privacy-and-cookies'>privacy policy</Link> and <Link to='/legals'>terms & conditions</Link>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;