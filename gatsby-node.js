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

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/refer/)) {
    page.matchPath = "/refer/*"

    createPage(page)
  }
}

exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions;
  const standardTemplate = path.resolve('./src/templates/layout.js');
  const articleTemplate = path.resolve('./src/templates/article.js');
  const blogTemplate = path.resolve('./src/templates/blog.js');


  function stripTrailingSlash(str) {
    if(str.substr(-1) === '/') {
        return str.substr(0, str.length - 1);
    }
    return str;
  }

  const result = await graphql(`
    query  {
      allSources: allMdx {
        edges {
          node {
            slug
            fields {
              collection
            }
            meta: frontmatter {
              slug
              priority
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

  const blogEdges = allEdges.filter(
    edge => edge.node.fields.collection === `blog`
  );

  pageEdges.forEach((edge) => {
    createPage({
      path: edge.node.meta.slug,
      component: standardTemplate,
      context: {
        slug: edge.node.meta.slug,
        priority: edge.node.meta.priority
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

  blogEdges.forEach((edge) => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: blogTemplate,
      context: {
        slug: `${edge.node.slug}`
      }
    });
  });
};

const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const oldPage = Object.assign({}, page)
  // Remove trailing slash unless page is /
  page.path = replacePath(page.path)
  if (page.path !== oldPage.path) {
    // Replace old page with new page
    deletePage(oldPage)
    createPage(page)
  }
}
