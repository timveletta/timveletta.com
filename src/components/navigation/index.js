import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { COLORS, FONTS } from "../../utils/css-globals"

const Container = styled.nav`
  background-color: ${COLORS.primary};

  a {
    text-decoration: none;
  }

  > div {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;

    display: grid;
    grid-template-columns: 1fr 1fr;

    > div {
      justify-self: end;
      align-self: center;

      a {
        color: ${COLORS.secondary};
        font-family: ${FONTS.secondary};
        margin-left: 2rem;
      }
    }
  }

  h3 {
    font-family: ${FONTS.primary};
    color: ${COLORS.accent};
  }
`

const Navigation = () => (
  <Container>
    <div>
      <Link to="/">
        <h3>Tim Veletta</h3>
      </Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </div>
  </Container>
)

export default Navigation
