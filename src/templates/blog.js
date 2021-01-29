import React from 'react';
import { graphql } from 'gatsby';
import Head from '../components/head/head';
import { Header } from '../components/header/header';
import Footer from '../components/footer/footer';
import SEO from '../components/seo';
import Content from '../components/content/content';
import Post from '../components/blog/post/post';

export const query = graphql`
  query($slug: String!) {
    page: allMdx(filter: {slug: {eq: $slug}}) {
      edges {
        node {
          slug
          body
          frontmatter {
            title
            date
            description
          }
        }
      }
    }
  }
`;

const Layout = ({
  data
}) => {
  let props = {
    title: data.page.edges[0].node.frontmatter.title,
    date: data.page.edges[0].node.frontmatter.date,
    description: data.page.edges[0].node.frontmatter.description,
    featuredImage: data.page.edges[0].node.featuredImage,
    body: data.page.edges[0].node.body
  }
  return (
    <>
      <Post {...props}/>
    </>
  );
};

export default Layout;
