const path = require('path');

module.exports.createPages = async({graphql, actions}) => {
  const { createPage } = actions;
  const layoutTemplate = path.resolve('./src/components/layout.js');
  const result = await graphql(`
    query {
      allStrapiPage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  result.data.allStrapiPage.edges.forEach((edge) => {
    createPage({
      path: edge.node.slug,
      component: layoutTemplate,
      context: {
        slug: edge.node.slug
      }
    });
  });
};