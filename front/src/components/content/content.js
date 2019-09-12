import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import P from '../custom-html-tags/p/p';
import H2 from '../custom-html-tags/h2/h2';

const components = {
  p: P,
  h2: H2
}

const Content = ({children}) => {
  return (
    <MDXProvider components={components}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  );
};

export default Content;