import React from 'react';
import { graphql } from 'gatsby';
import Head from '../components/head/head';
import SEO from '../components/seo';
import Content from '../components/content/content';

export const query = graphql`
  query($slug: String!) {
    page: allMdx(filter: {fields: {collection: {eq: "partner"}}, frontmatter: {slug: {eq: $slug, ne: null}}}) {
      nodes {
        content: body
      }
    }
  }
`;

const Layout = ({
  data
}) => {

  return (
    <>
      <Head title={''}/>
      <SEO
        />  
      <Content>
        {data.page.nodes.content}
      </Content>
    </>
  );
};

export default Layout;