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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `faqs`,
        path: `${__dirname}/src/faqs`
      }
    },
    `gatsby-transformer-remark`
  ],
}
