import React from 'react';
import Head from '../components/head/head';
import { graphql } from 'gatsby';
import Header from '../components/header/header';
import { Main, LAYOUT_VARIANT } from  '../components/main/main';
import Content from '../components/content/content';
import Footer from '../components/footer/footer';

export const query = graphql`
  query($slug: String!) {
    page: mdx(frontmatter: {slug: {eq: $slug}}) {
      meta: frontmatter {
        heading
        subheading
      }
      content: body
    }
  }
`;

const Layout = ({ data }) => {
  return (
    <>
      <Head title={data.page.meta.heading}/>
      <Header heading={data.page.meta.heading} subheading={data.page.meta.subheading}/>
      <Main layoutVariant={LAYOUT_VARIANT.PAGE}>
        <Content>
          {data.page.content}
        </Content>
      </Main>
      <Footer/>
    </>
  );
};

export default Layout;