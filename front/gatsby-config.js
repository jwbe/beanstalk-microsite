module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    menuLinks: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: 'why-beanstalk',
        link: '/why-beanstalk'
      },
      {
        name: 'about-beanstalk',
        link: '/about-beanstalk'
      },
      {
        name: 'support',
        link: '/support'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        contentTypes: [
          'page',
          'faq',
          'header'
        ],
        queryLimit: 1000
      }
    },
    {
      resolve: `gatsby-transformer-remark`
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
