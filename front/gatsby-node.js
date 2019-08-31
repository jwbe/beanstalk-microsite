const path = require('path');
const _ = require('lodash');

exports.onCreateNode = ({node, actions, getNode}) => {
  const { createNodeField } = actions;
  if (_.get(node, 'internal.type') === `MarkdownRemark`) {
    const parent = getNode(_.get(node, 'parent'));
    createNodeField({
      node,
      name: 'collection',
      value: _.get(parent, 'sourceInstanceName')
    });
  }
};

exports.createPages = async({graphql, actions}) => {
  const { createPage } = actions;
  const layoutTemplate = path.resolve('./src/templates/layout.js');
  const result = await graphql(`
    query  {
      allSources: allMarkdownRemark {
        edges {
          node {
            fields {
              collection
            }
            meta: frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  const allEdges = result.data.allSources.edges;
  const pageEdges = allEdges.filter(
    edge => edge.node.fields.collection === `pages`
  );
  pageEdges.forEach((edge) => {
    createPage({
      path: edge.node.meta.slug,
      component: layoutTemplate,
      context: {
        slug: edge.node.meta.slug
      }
    });
  });
};