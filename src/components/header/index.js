import React from "react"
import styled from "styled-components"
import { COLORS, FONTS } from "../../utils/css-globals"
import SocialLinks from "../social-links"

const Container = styled.header`
  background-color: ${COLORS.primary};
  color: ${COLORS.secondary};

  display: grid;
  align-items: center;
  height: 100vh;

  > div {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 0.5rem;

    h1 {
      font-size: 2.5rem;
      line-height: 1.5;
      font-family: ${FONTS.primary};
    }
  }
`

const Emphasis = styled.span`
  color: ${COLORS.accent};
  font-weight: bold;
`

const Header = () => (
  <Container>
    <div>
      <h1>
        Hi I'm <Emphasis>Tim Veletta</Emphasis>,
      </h1>
      <h1>
        I enjoy developing <Emphasis>websites</Emphasis>,{" "}
        <Emphasis>games</Emphasis> and{" "}
        <Emphasis>cloud based applications</Emphasis>.
      </h1>
      <SocialLinks />
    </div>
  </Container>
)

export default Header
