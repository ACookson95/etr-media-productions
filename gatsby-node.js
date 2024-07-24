const express = require("express");
const path = require('path');

exports.onCreateDevServer = ({ app }) => {
  app.use("/admin", express.static("public/admin"));
};


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allFile(filter: {sourceInstanceName: {eq: "blogPosts"}}) {
        nodes {
          name
          childMdx {
            id
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  const blogPostTemplate = path.resolve(`src/templates/blog-post-template.js`);

  result.data.allFile.nodes.forEach(node => {
    createPage({
      path: `/posts/${node.name}`,
      component: `${blogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.childMdx.id },
    });
  });
};