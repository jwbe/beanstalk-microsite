import React from 'react'
import Theme from './faq.module.scss'
import H2 from '../custom-html-tags/h2/h2'

if (typeof window !== 'undefined') {
  require('details-polyfill')
}

export const Faq = props => {
  const { summary, children, anchor } = props

  return (
    <>
    { 
      anchor
      &&
      <a {...{
        name: anchor
      }}></a>
    }
    <details {...{
      className: Theme.Faq_Details
    }}>
      <summary {...{
        className: Theme.Faq_Summary
      }}>
        { summary }
      </summary>
      <div {...{
        className: Theme.Faq_Content
      }}>
        { children }
      </div>
    </details>
    </>
  )
}

export const Section = props => {
  const { heading, children } = props
  return (
    <section {...{
      className: Theme.Faq_Section
    }}>
      <H2>
        { heading }
      </H2>
      { children }
    </section>
  )
}