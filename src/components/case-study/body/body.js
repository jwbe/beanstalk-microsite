import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import Theme from './body.module.scss';

const Body = (props) => {

  let { children } = props;
  
  return (
    <div className={Theme.Container}>
      <MDXProvider>
        <MDXRenderer>
          { children }
        </MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export default Body;