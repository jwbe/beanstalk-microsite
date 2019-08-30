import React from 'react';
import { graphql } from 'gatsby';
import rehypeReact from 'rehype-react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Counter from '../components/counter/counter';

const ReactMarkdown = require('react-markdown/with-html');



export const query = graphql`
  query($slug: String!) {
    page: strapiPage(slug: {eq: $slug}) {
      heading
      subheading
      content
    }
  }
`

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'InteractiveCounter': Counter },
}).Compiler;

const Layout = ({ data }) => {
  return (
    <>
    <Header heading={data.page.heading} subheading={data.page.subheading}/>
    <main>
      <ReactMarkdown source={data.page.content}/>
    </main>
    <Footer/>
    </>
  );
};

export default Layout;