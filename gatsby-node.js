/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Project {
      allStrapiProjects {
        nodes {
          slug
        }
      }
    }
  `)

  data.allStrapiProjects.nodes.forEach(node => {
    actions.createPage({
      path: "/projects/" + node.slug,
      component: path.resolve("./src/templates/project-details/index.tsx"),
      context: {
        slug: node.slug,
      },
    })
  })
}
