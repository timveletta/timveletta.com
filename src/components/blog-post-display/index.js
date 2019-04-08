import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { COLORS, FONTS } from "../../utils/css-globals"

const Container = styled.div`
  display: grid;
  grid-template-rows: 8rem 2rem auto;
  margin: 2rem;

  a {
    text-decoration: none;
    align-self: end;
    color: ${COLORS.accent};
  }

  h2 {
    margin: 0;
    text-align: left;
    line-height: 1.5;
    font-family: ${FONTS.primary};
  }
  h5 {
    margin: 0.5rem;
    font-family: ${FONTS.secondary};
    color: ${COLORS.muted};
    text-transform: uppercase;
  }
  p {
    line-height: 2;
    font-family: ${FONTS.secondary};
    text-align: justify;
  }
`

const BlogPostDisplay = ({ title, slug, date, excerpt }) => (
  <Container>
    <Link to={slug}>
      <h2>{title}</h2>
    </Link>
    <h5>{date}</h5>
    <p>
      <span
        dangerouslySetInnerHTML={{
          __html: excerpt,
        }}
      />
      <Link to={slug}>Read More</Link>
    </p>
  </Container>
)

BlogPostDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string,
  excerpt: PropTypes.string,
}

export default BlogPostDisplay
