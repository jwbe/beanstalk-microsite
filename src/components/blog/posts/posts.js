import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Button, DESKTOP_COLOURS, DESKTOP_SIZES, DESKTOP_BACKGROUNDS } from '../../button/button'
import Theme from './posts.module.scss'

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      blogPosts: allMdx(sort: {order: DESC, fields: frontmatter___date} filter: {fields: {collection: {eq: "blog"}}, frontmatter: {app: {ne: true}}}) {
        edges {
          node {
            id
            slug
            frontmatter {
              title
              date(formatString: "MMMM Do YYYY")
              path
              description
              author
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 912, maxHeight: 304, quality: 80, cropFocus: CENTER) {
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
              path: post.node.frontmatter.path,
              date: post.node.frontmatter.date,
              description: post.node.frontmatter.description,
              author: post.node.frontmatter.author,
              featuredImage: post.node.frontmatter.featuredImage.childImageSharp.fluid,
              body: post.node.body
            }
            return (
              <article className={Theme.Post} key={props.id}>
                <Link to={`/blog/${props.slug}`}>
                  <Img className={Theme.FeaturedImage} fluid={ props.featuredImage }/>
                </Link>
                <header>
                  <h3 className={Theme.Heading}>
                    <Link to={`/blog/${props.path}`}>
                      { props.title }
                    </Link>
                  </h3>
                </header>
                <div className={Theme.InfoPanel}>
                  <div className={Theme.Details}>
                    <div className={Theme.Description}>
                      { props.description }
                    </div>
                    <div className={Theme.Meta}>
                      <address className={Theme.Author} rel="author">
                        By <strong>{ props.author }</strong>
                      </address>
                      <time>
                        { props.date }
                      </time>
                    </div>
                  </div>
                  <div className={Theme.Button}>
                    <Button className={Theme.BackButton} link={`/blog/${props.path}`} 
                      desktopColour={DESKTOP_COLOURS.WHITE}
                      desktopSize={DESKTOP_SIZES.LARGE}
                      desktopBackground={DESKTOP_BACKGROUNDS.SECONDARY}
                      >
                      Read article
                    </Button>
                  </div>
                </div>
              </article>
            )
          })
        }
    </>
  )
};



export default Posts;



