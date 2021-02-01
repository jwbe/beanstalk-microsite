import React from 'react';
import { graphql } from 'gatsby';
import Head from '../components/head/head';
import { Header } from '../components/header/header';
import Footer from '../components/footer/footer';
import SEO from '../components/seo';
import Post from '../components/blog/post/post';

export const query = graphql`
  query($id: String!) {
    page: allMdx(filter: {id: {eq: $id}}) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM Do YYYY")
            description
            author
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 640, maxHeight: 360, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          id
          body
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
    author: data.page.edges[0].node.frontmatter.author,
    featuredImage: data.page.edges[0].node.frontmatter.featuredImage.childImageSharp.fluid,
    body: data.page.edges[0].node.body
  }
  return (
    <>
      <Header/>
      <Post {...props}/>
      <Footer/>
    </>
  );
};

export default Layout;
