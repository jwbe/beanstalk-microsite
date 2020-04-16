module.exports = {
  siteMetadata: {
    siteUrl: `https://beanstalkapp.co.uk`,
    title: `Beanstalk`,
    description: `Beanstalk's Microsite`,
    author: `James Barrett`,
    logoUrl: `https://beanstalkapp.co.uk/static/images/beanstalk-icon.png`,
    footer: {
      companyRegistration: `© Copyright Beanstalk Ltd 2019, all rights reserved. Company registration number 7652431. `,
      companyAuthorised: `Authorised and regulated by the Financial Conduct Authority - Authorisation no. 473606.`,
      companyCopyright: `© 2019 Beanstalk Limited`
    },
    menuLinks: [
      {
        name: 'About Beanstalk',
        link: '/about-beanstalk'
      },
      {
        name: 'Support',
        link: '/support'
      },
      {
        name: 'Articles',
        link: '/articles'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
               node {
                 path
               }
             }
          }
          allMdx(filter: {frontmatter: {canonical: {eq: null}}, fields: {collection: {in: ["pages", "articles"]}}}) {
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
        }`,
        serialize: ({ site, allSitePage, allMdx }) => {
          let pages = []
          const allEdges = allMdx.edges;
          const pageEdges = allEdges.filter(
            edge => edge.node.fields.collection === `pages`
          );
          const articleEdges = allEdges.filter(
            edge => edge.node.fields.collection === `articles`
          );
          pageEdges.forEach(edge => {
            pages.push({
              url: `${site.siteMetadata.siteUrl}/${edge.node.frontmatter.slug}`,
              changefreq: `daily`,
              priority: 0.7,
            })
          })
          articleEdges.forEach(edge => {
            pages.push({
              url: `${site.siteMetadata.siteUrl}/articles/${edge.node.frontmatter.slug}`,
              changefreq: `daily`,
              priority: 0.7,
            })
          })
          return pages
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://beanstalkapp.co.uk`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Beanstalk microsite`,
        short_name: `BS microsite`,
        start_url: `/`,
        background_color: `#32b67a`,
        theme_color: `#055a5b`,
        display: `minimal_ui`,
        icon: `src/images/beanstalk-icon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: '@import "global.scss";',
        includePaths: ["./src/components/scss/global"]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-2373866-7"
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/content/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/content/articles/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `faqs`,
        path: `${__dirname}/src/content/faqs`
      }
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Roboto:100,200,300,400,700:latin', 'Quicksand:400,700:latin']
        }
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    }
  ]
}
