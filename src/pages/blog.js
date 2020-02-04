import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import BlogPost from "../components/blog-post"
import SEO from "../components/seo"
import Navigation from "../components/navigation"

import { COLORS, FONTS } from "../utils/css-globals"

const Section = styled.div`
  text-align: center;

  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 4rem 0.5rem 6rem 0.5rem;

  h1 {
    font-family: ${FONTS.primary};
    margin-bottom: 2rem;
  }
`

const BlogPosts = styled(Section)`
  background-color: ${COLORS.secondary};
  color: ${COLORS.primary};
  display: grid;

  grid-template-columns: auto;

  > h1 {
    /* grid-column: span 2; */
  }
`

const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
`

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Navigation />
        <SEO
          title="Blog"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <BlogPosts>
          <h1>Blog Posts</h1>
          <Posts>
            {posts.map(({ node }) => (
              <BlogPost
                key={node.fields.slug}
                title={node.frontmatter.title || node.fields.slug}
                slug={node.fields.slug}
                date={node.frontmatter.date}
                tags={node.frontmatter.tags}
                content={node.html}
              />
            ))}
          </Posts>
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
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
