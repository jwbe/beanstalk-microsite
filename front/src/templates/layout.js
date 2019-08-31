import React from 'react';
import { graphql } from 'gatsby';
import rehypeReact from 'rehype-react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Faqs from '../components/faqs/faqs';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'faqs': Faqs
  }
}).Compiler

export const query = graphql`
  query($slug: String!) {
    page: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      meta: frontmatter {
        heading
        subheading
      }
      content: htmlAst
    }
  }
`;

const Layout = ({ data }) => {
  return (
    <>
      <Header heading={data.page.meta.heading} subheading={data.page.meta.subheading}/>
      <main>
        {
          renderAst(data.page.content)
        }
      </main>
      <Footer/>
    </>
  );
};

export default Layout;