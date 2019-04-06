import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ProjectDisplay from "../components/project-display"
import BlogPostDisplay from "../components/blog-post-display"
import SEO from "../components/seo"

const Section = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 1rem;
  }
`

const Projects = styled(Section)``

const BlogPosts = styled(Section)``

class Homepage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Projects>
          <h1>Latest Projects</h1>
          <div>
            <ProjectDisplay name="Project 1" />
            <ProjectDisplay name="Project 1" />
            <ProjectDisplay name="Project 1" />
          </div>
        </Projects>
        <BlogPosts>
          <h1>Recent Blog Posts</h1>
          <div>
            {posts.map(({ node }) => (
              <BlogPostDisplay
                key={node.fields.slug}
                title={node.frontmatter.title || node.fields.slug}
                slug={node.fields.slug}
                date={node.frontmatter.date}
                excerpt={node.excerpt}
              />
            ))}
          </div>
        </BlogPosts>
        {/* Contact */}
      </Layout>
    )
  }
}

export default Homepage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 280)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
