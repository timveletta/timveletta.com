import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import BlogPostDisplay from "../components/blog-post-display"
import SEO from "../components/seo"

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

const BlogPosts = styled(Section)`
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
        <BlogPosts>
          <h1>Blog Posts</h1>
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
