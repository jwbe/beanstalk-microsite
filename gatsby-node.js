const path = require('path');
const _ = require('lodash');


exports.onCreateNode = ({node, actions, getNode}) => {
  const { createNodeField } = actions;
  if (_.get(node, 'internal.type') === `Mdx`) {
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
  const standardTemplate = path.resolve('./src/templates/layout.js');
  const articleTemplate = path.resolve('./src/templates/article.js');

  const result = await graphql(`
    query  {
      allSources: allMdx {
        edges {
          node {
            fields {
              collection
            }
            meta: frontmatter {
              slug
            }
          }
          next {
            meta: frontmatter {
              slug
            }
            fields {
              collection
            }
          }
          previous {
            meta: frontmatter { 
              slug
            }
            fields {
              collection
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

  const articleEdges = allEdges.filter(
    edge => edge.node.fields.collection === `articles`
  );

  pageEdges.forEach((edge) => {
    createPage({
      path: edge.node.meta.slug,
      component: standardTemplate,
      context: {
        slug: edge.node.meta.slug
      }
    });
  });

  articleEdges.forEach((edge) => {
    createPage({
      path: `/articles/${edge.node.meta.slug}`,
      component: articleTemplate,
      context: {
        slug: edge.node.meta.slug,
        previous: edge.previous.fields.collection === `articles` ? edge.previous.meta.slug : null,
        next: edge.next.fields.collection === `articles` ? edge.next.meta.slug : null
      }
    });
  });
};
