const path = require('path');

module.exports.createPages = async({graphql, actions}) => {
  const { createPage } = actions;
  const layoutTemplate = path.resolve('./src/templates/generated.js');
  const result = await graphql(`
    query {
      allPages: allStrapiPage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  result.data.allPages.edges.forEach((edge) => {
    createPage({
      path: edge.node.slug,
      component: layoutTemplate,
      context: {
        slug: edge.node.slug
      }
    });
  });
};