import React from 'react'
import Theme from './testimonial-landing.module.scss'
import GetApp from './get-app-button/get-app-button'
import { Link } from 'gatsby'
import Graph from './graph/graph'
import PressLogos from './press-logos/press-logos'

import homepageGraphic from './images/homepage-graphic.png'

const TestimonialLanding = props => {

  return (
    <>
      <section {...{
        className: Theme.Top
      }}>
        <h1 {...{
          className: Theme.Headline
        }}>
          Switch and save £150* for your child
        </h1>

        <blockquote {...{
          className: Theme.Testimonial
        }}>
          <div {...{
            className: Theme.Testimonial_Thumbnail
          }}>
          </div>
          <div>
            <p>
              "I now feel comfortable that my children's Junior ISA money is in a place where fees are low"
            </p>
            <small>
              Lynn Beattie aka Mrs MummyPenny,  <br/>Personal Finance Expert
            </small>
          </div>
        </blockquote>

        <GetApp {...{
          children: `Get the app`
        }}/>

        <aside {...{
          className: Theme.Rating
        }}>
          <div {...{
            className: Theme.Rating_Inner
          }}>
            <div {...{
              className: Theme.Stars
            }}>
              <div {...{
                className: Theme.Star
              }}></div>
              <div {...{
                className: Theme.Star
              }}></div>
              <div {...{
                className: Theme.Star
              }}></div>
              <div {...{
                className: Theme.Star
              }}></div>
              <div {...{
                className: Theme.Star
              }}></div>
            </div>
            <div {...{
              className: Theme.Rating_Score
            }}>
              4.6
            </div>
          </div>
        </aside>
      </section>

      <section {...{
        className: Theme.Details
      }}>
        <p>
          Save on fees by transferring your Child Trust Fund (CTF) to a Beanstalk Junior ISA. You can open an account in minutes and we’ll take care of the switch for you.
        </p>

        <p>
          Bring your CTF into the modern era and into the palm of your hand; utilise our savings tools on our easy-to-use app to give your kids the best possible launch into adult life.
        </p>
      </section>

      <section>
        <h2 {...{
          className: Theme.Heading
        }}>
          All your family's saving accounts, under one roof
        </h2>

        <img {...{
          className: Theme.HomepageGraphic,
          src: homepageGraphic,
          alt: `Easy to use`
        }}/>
      </section>

      <section>
        <h2 {...{
          className: Theme.Heading
        }}>
          See how our fees compare
        </h2>

        <div {...{
          className: Theme.GraphWrapper
        }}>
          <Graph/>
        </div>
      </section>

      <section {...{
        className: Theme.Panels
      }}>
        <aside {...{
          className: Theme.Panel
        }}>
          <h3>
            See how much you could save when you switch:
          </h3>
          <Link {...{
            to: `/switch-and-save`
          }}>
            Explore our switch and save calculator
          </Link>
        </aside>

        <aside {...{
          className: Theme.Panel
        }}>
          <h3>
            Unsure where your Child Trust Fund is?
          </h3>
          <Link {...{
            to: `/articles/locate-a-missing-ctf`
          }}>
            Locate a missing CTF
          </Link>
        </aside>
      </section>

      <section {...{
        className: Theme.PressLogos
      }}>
        <h2 {...{
          className: Theme.Heading
        }}>
          As seen in
        </h2>

        <PressLogos/>

      </section>

      <section {...{
        className: Theme.FinalCta
      }}>
        <GetApp {...{
          type: `primary`,
          children: `Get the app`
        }}/>
      </section>

      <section {...{
        className: Theme.SmallPrint
      }}>
        <small>
          * As of April 21st, Beanstalk users transferring in stocks & shares CTFs or JISAs have saved on average £180 in fees until the child is 18.
        </small>
        <small>
          † Competitor fees checked on their websites, correct as of 09/07/2021.
        </small>
      </section>
    </>
  )
}

export default TestimonialLanding;