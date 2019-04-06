import React from "react"
import styled from "styled-components"
import { COLORS, FONTS } from "../../utils/css-globals"
import { FaGitlab, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa"
import { Link } from "gatsby"

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

const SocialLinks = styled.div`
  text-align: center;
  font-size: 2rem;
  > a {
    color: ${COLORS.muted};
    margin: 0.5rem;

    :hover {
      color: ${COLORS.accent};
    }
  }
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
      <SocialLinks>
        <a href="https://gitlab.com/timveletta">
          <FaGitlab />
        </a>
        <a href="https://twitter.com/timveletta">
          <FaTwitter />
        </a>
        <a href="https://instagram.com/t1mmahh">
          <FaInstagram />
        </a>
        <a href="mailto: tim.veletta@gmail.com">
          <FaEnvelope />
        </a>
      </SocialLinks>
    </div>
  </Container>
)

export default Header
