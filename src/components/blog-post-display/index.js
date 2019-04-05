import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Container = styled.div`
  display: grid;
`

const BlogPostDisplay = ({ title, slug, date, excerpt }) => (
  <Container>
    <h3>
      <Link style={{ boxShadow: `none` }} to={slug}>
        {title}
      </Link>
    </h3>
    <small>{date}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: excerpt,
      }}
    />
  </Container>
)

BlogPostDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string,
  excerpt: PropTypes.string,
}

export default BlogPostDisplay
