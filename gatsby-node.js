/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allSitePlugin {
          nodes {
            name
          }
          totalCount
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const pluginsInfoTemplate = path.resolve(
    __dirname,
    `src/templates/pluginsInfo.js`
  )
  const pluginNames = Array.from(
    new Set(result.data.allSitePlugin.nodes.map(node => node.name))
  )
  createPage({
    path: "/pluginsInfo",
    component: pluginsInfoTemplate,
    context: {
      data: {
        names: pluginNames,
        totalCount: pluginNames.length,
      },
    },
  })
}
