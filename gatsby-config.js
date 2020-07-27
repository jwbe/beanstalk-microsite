module.exports = {
  siteMetadata: {
    siteUrl: `https://beanstalkapp.co.uk`,
    title: `Beanstalk`,
    description: `Beanstalk's Microsite`,
    author: `James Barrett`,
    logoUrl: `https://beanstalkapp.co.uk/images/beanstalk-icon.png`,
    footer: {
      companyRegistration: `© Copyright Beanstalk Ltd 2019, all rights reserved. Company registration number 7652431. `,
      companyAuthorised: `Authorised and regulated by the Financial Conduct Authority - Authorisation no. 473606.`,
      companyCopyright: `© 2019 Beanstalk Limited`
    },
    menuLinks: [
      {
        name: 'Key Features',
        link: '/features'
      },
      {
        name: 'About Beanstalk',
        link: '/about-beanstalk'
      },
      {
        name: 'Support',
        link: '/support'
      },

    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-2373866-7"
        ],
        defaultDataLayer: 'GTM-P72DNHS',
        gtmAuth: 'GTM-P72DNHS',
        gtmPreview: 'GTM-P72DNHS',
        dataLayerName: 'GTM-P72DNHS_NAME'
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [`/beanstalk-survey`, `/jisa-declaration`, `/isa-declaration`, `/key-features-documents`, `/key-investor-information-documents`, `/articles/about-junior-isa-app`, `/articles/how-family-saving-works-app`, `/articles/how-round-ups-work-app`, `/articles/locate-a-missing-ctf-app`, `/articles/saving-vs-investing-app`, `/articles/transfer-ctf-jisa-app`, `/articles/welcome-to-beanstalk-app`],
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
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://beanstalkapp.co.uk',
        sitemap: 'https://beanstalkapp.co.uk/sitemap.xml',
        policy: [{ userAgent: '*', disallow: [`/docs/JISATransferForm.pdf`, `/beanstalk-survey`] }]
      }
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
        icon: `src/images/beanstalk-icon.png`,
        icons: [
          {
            src: `/images/android-icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          }
        ],
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
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    }
  ]
}
