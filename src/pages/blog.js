import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ProjectDisplay from "../components/project-display"
import BlogPostDisplay from "../components/blog-post-display"
import SEO from "../components/seo"
import Button from "../components/button"

import { COLORS, FONTS } from "../utils/css-globals"

const Section = styled.div`
  text-align: center;

  padding: 4rem 0.5rem 6rem 0.5rem;

  h1 {
    font-family: ${FONTS.primary};
    margin-bottom: 2rem;
  }

  > div {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-wrap: wrap;
    align-content: space-around;

    > div {
      flex: 1 1 320px;
      min-height: 320px;
    }
  }
`

const Projects = styled(Section)``

const BlogPosts = styled(Section)`
  background-color: ${COLORS.primary};
  color: ${COLORS.secondary};
`

const Contact = styled(Section)`
  background-color: ${COLORS.primary};
  color: ${COLORS.secondary};
`

class Blog extends React.Component {
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
          <h1>Projects</h1>
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
            <Button name="View All Posts" />
          </div>
        </BlogPosts>
        {/* Contact */}
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
