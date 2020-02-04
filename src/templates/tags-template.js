import React from "react"
import { graphql } from "gatsby"
import BlogPost from "../components/blog-post"
import styled from "styled-components"
import { COLORS, FONTS } from "../utils/css-globals"

import Navigation from "../components/navigation"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
`

const Header = styled.h1`
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-family: ${FONTS.primary};
  line-height: 1.5;
  > span {
    color: ${COLORS.accent};
  }
`

class TagsTemplate extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const siteTitle = this.props.data.site.siteMetadata.title
    const { tag } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={tag} />
        <Navigation />
        <Container>
          <Header>
            All posts tagged <span>"{tag}"</span>
          </Header>
          {posts.map(({ node }) => (
            <>
              <BlogPost
                slug={node.fields.slug}
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                content={node.html}
                tags={node.frontmatter.tags}
              />
              <hr />
            </>
          ))}
        </Container>
      </Layout>
    )
  }
}

export default TagsTemplate

export const pageQuery = graphql`
  query BlogPostByTag($tag: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { eq: $tag } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            tags
            title
            date(formatString: "MMMM DD, YYYY")
          }
          html
        }
      }
    }
  }
`
