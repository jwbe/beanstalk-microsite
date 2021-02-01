import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      blogPosts: allMdx(filter: {fields: {collection: {eq: "blog"}}, frontmatter: {app: {ne: true}}}) {
        edges {
          node {
            id
            slug
            frontmatter {
              title
              date
              description
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 1280, maxHeight: 360, quality: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
        {
          data.blogPosts.edges.map((post) => {
            let props = {
              slug: post.node.slug.substr(0, post.node.slug.length - 1),
              id: post.node.id,
              title: post.node.frontmatter.title,
              date: post.node.frontmatter.date,
              description: post.node.frontmatter.description,
              featuredImage: post.node.frontmatter.featuredImage.childImageSharp.fluid,
              body: post.node.body
            }
            return (
              <div key={props.id}>
                <Link to={`/blog/${props.slug}`}>
                  <Img fluid={ props.featuredImage }/>
                </Link>
                <Link to={`/blog/${props.slug}`}>
                  { props.title }
                </Link>
                { props.date }
                { props.description }
                <Link to={`/blog/${props.slug}`}>Go to post</Link>
              </div>
            )
          })
        }
    </>
  )
};



export default Posts;



