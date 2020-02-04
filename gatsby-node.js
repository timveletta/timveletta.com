const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const projectTemplate = path.resolve(`./src/templates/project-template.js`)
  const blogPost = path.resolve(`./src/templates/blog-post-template.js`)
  const tagsTemplate = path.resolve(`./src/templates/tags-template.js`)

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fileAbsolutePath
              fields {
                slug
              }
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges.filter(e =>
      e.node.fileAbsolutePath.includes("/blog/")
    )

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    // create tags pages
    const tags = result.data.allMarkdownRemark.edges
      .map(e => e.node.frontmatter.tags)
      .flat()
      .filter((tag, index, array) => array.indexOf(tag) === index)
      .sort()

    tags.forEach(tag =>
      createPage({
        path: `/tag/${tag}`,
        component: tagsTemplate,
        context: {
          tag: tag,
        },
      })
    )

    // create projects pages
    const projects = result.data.allMarkdownRemark.edges.filter(e =>
      e.node.fileAbsolutePath.includes("/projects/")
    )
    projects.forEach(project => {
      createPage({
        path: project.node.fields.slug,
        component: projectTemplate,
        context: {
          title: project.node.frontmatter.title,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
