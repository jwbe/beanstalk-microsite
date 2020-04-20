import React from 'react';
import { graphql } from 'gatsby';
import Head from '../components/head/head';
import { Header, HEADER_VARIANT } from '../components/header/header';
import { Main, LAYOUT_VARIANT } from  '../components/main/main';
import Article from '../components/article/article';
import Footer from '../components/footer/footer';
import Wrapper from '../components/wrapper/wrapper';
import SEO from '../components/seo';

export const query = graphql`
  query($slug: String!) {
    page: mdx(frontmatter: {slug: {eq: $slug}}) {
      meta: frontmatter {
        heading
        subheading
        app
        slug
        canonical
        coverImage {
          childImageSharp {
            fluid(maxWidth: 640, maxHeight: 360, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        coverImage_alt
        date(formatString: "Do MMMM YYYY")
        category
        author
      }
      content: body
    }
  }
`;


const Layout = ({
  data,
  pageContext
}) => {
  const { next, previous } = pageContext;
  return (
    <>
      <Wrapper>
        <Head title={data.page.meta.heading}/>
        <SEO
          title={data.page.meta.heading}
          description={data.page.meta.excerpt}
          keywords={data.page.meta.tags}
          canonical={data.page.meta.canonical}
          />
        { data.page.meta.app ? null : <Header plain={true} heading={data.page.meta.heading} subheading={data.page.meta.subheading}/> }
        <Main layoutVariant={LAYOUT_VARIANT.ARTICLE}>
          <Article 
            articleCategory={data.page.meta.category} 
            articleHeading={data.page.meta.heading} 
            articleSubheading={data.page.meta.subheading} 
            articleAuthor={data.page.meta.author} 
            articleDate={data.page.meta.date}
            articleCoverImage={data.page.meta.coverImage.childImageSharp.fluid}
            articleCoverImage_alt={data.page.meta.coverImage_alt}
            articleContent={data.page.content}
            articleNext={next}
            articlePrevious={previous}
            />
        </Main>
        { data.page.meta.app ? null : <Footer/> }
      </Wrapper>
    </>
  );
};

export default Layout;