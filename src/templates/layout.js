import React from 'react';
import Head from '../components/head/head';
import { graphql } from 'gatsby';
import { Header, HEADER_VARIANT } from '../components/header/header';
import { Main, LAYOUT_VARIANT } from  '../components/main/main';
import Content from '../components/content/content';
import Footer from '../components/footer/footer';
import Wrapper from '../components/wrapper/wrapper';
import SEO from '../components/seo';

export const query = graphql`
  query($slug: String!) {
    page: mdx(frontmatter: {slug: {eq: $slug}}) {
      meta: frontmatter {
        heading
        subheading
        title
        description
        media
        plain
        app
        canonical
      }
      content: body
    }
  }
`;

const Layout = ({ data }) => {
  return (
    <>
      <Wrapper>
        <Head title={data.page.meta.heading}/>
        <SEO
          title={data.page.meta.title}
          description={data.page.meta.description}
          canonical={data.page.meta.canonical}
          />
        { data.page.meta.app ? null : <Header plain={data.page.meta.plain} headerVariant={data.page.meta.media ? HEADER_VARIANT.MEDIA_PAGE : null} heading={data.page.meta.heading} subheading={data.page.meta.subheading}/> }
        <Main layoutVariant={data.page.meta.media ? LAYOUT_VARIANT.MEDIA_PAGE : LAYOUT_VARIANT.PLAIN_PAGE}>
          <Content>
            {data.page.content}
          </Content>
        </Main>
        { data.page.meta.app ? null : <Footer/> }
      </Wrapper>
    </>
  );
};

export default Layout;



