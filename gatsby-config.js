const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://beanstalkapp.co.uk',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

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
      resolve: `gatsby-plugin-netlify`
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '111269363785058',
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-2373866-7"
        ]
      },
      gtagConfig: {
        optimize_id: 'GTM-P72DNHS',
        anonymize_ip: false,
        cookie_expires: 0,
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
        exclude: [`/refer`, `/beanstalk-survey`, `/jisa-declaration`, `/isa-declaration`, `/key-features-documents`, `/key-investor-information-documents`],
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
        }`,
        serialize: ({ site, allSitePage, allMdx }) => {
          let pages = [
            {url: `${site.siteMetadata.siteUrl}`, changefreq: `daily`, priority: 0.7},
            {url: `${site.siteMetadata.siteUrl}/guides/jisa-guide`, changefreq: `daily`, priority: 0.7}
          ]
          const allEdges = allMdx.edges;
          const mdxPageEdges = allEdges.filter(
            edge => edge.node.fields.collection === `pages`
          );
          const mdxArticleEdges = allEdges.filter(
            edge => edge.node.fields.collection === `articles`
          );
          mdxPageEdges.forEach(edge => {
            pages.push({
              url: `${site.siteMetadata.siteUrl}/${edge.node.frontmatter.slug}`,
              changefreq: `daily`,
              priority: 0.7,
            })
          })
          mdxArticleEdges.forEach(edge => {
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
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            host: 'https://beanstalkapp.co.uk',
            sitemap: 'https://beanstalkapp.co.uk/sitemap.xml',
            policy: [{ userAgent: '*', disallow: [
              `/docs/JISATransferForm.pdf`, 
              `/beanstalk-survey`, 
              `/jisa-declaration-app`, 
              `/isa-declaration-app`, 
              `/key-features-documents`,
              `/key-investor-information-documents`,
              `/other-terms`,
              `/reglink`,
              `/terms-and-conditions-for-isa`,
              `/terms-and-conditions-governing-beanstalk`,
              `/data-privacy-and-cookies`,
              `/account-locked-app`,
              `/coming-soon-app`,
              `/bloggers`,
              `/articles-app`,
              `/contact-app`,
              `/data-privacy-and-cookies-app`,
              `/designed-for-growth-app`,
              `/facebook`,
              `/familiesmag`,
              `/family-saving-app`,
              `/faqs-app`,
              `/from-ctf-calculator`,
              `/gymboree`,
              `/instagram`,
              `/invest-in-their-future-app`,
              `/round-ups-app`,
              `/other-terms-app`,
              `/key-features-documents-app`,
              `/key-investor-information-documents-app`,
              `/kidstartblog`,
              `/kidstartemail`,
              `/kidstarthome`,
              `/kidstartinvite`,
              `/kidstartnotification`,
              `/legals-app`,
              `/littlebird`,
              `/other-terms-app`,
              `/readingeggs`,
              `/saving-made-simple-app`,
              `/support-app`,
              `/terms-and-conditions-governing-beanstalk-app`,
              `/theweekjr`,
              `/twitter`,
              `/use-alternative-link`, 
              ] }]
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
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
        display: `minimal-ui`,
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
