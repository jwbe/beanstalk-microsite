/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ canonical, description, lang, meta, title, noSitemap }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
          }
        }
        allSitePage {
          edges {
             node {
               path
             }
           }
        }
        allMdx(filter: {frontmatter: {app: {ne: true}, noSitemap: {ne: true}}, fields: {collection: {in: ["pages", "articles"]}}}) {
          edges {
            node {
              fields {
                collection
              }
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      description={description}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [{ rel: 'canonical', key: canonical, href: canonical }]
          : []
      }
      meta={[
        noSitemap
          ? [{ name: `robots`, content: `noindex`}]
          : [],
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:image`,
          content: site.siteMetadata.logoUrl,
        },
        {
          property: `og:description`,
          content: site.siteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: site.siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: site.siteMetadata.description,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  canonical: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
