import React from "react"
import styled from "styled-components"
import { FaGithub, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa"
import { COLORS } from "../../utils/css-globals"

const Container = styled.div`
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

const SocialLinks = () => (
  <Container>
    <a href="https://github.com/timveletta">
      <FaGithub />
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
  </Container>
)

export default SocialLinks
