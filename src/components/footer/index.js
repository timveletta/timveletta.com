import React from "react"
import styled from "styled-components"
import { COLORS, FONTS } from "../../utils/css-globals"
import SocialsLinks from "../social-links"

const Container = styled.footer`
  background-color: ${COLORS.primary};
  color: ${COLORS.secondary};
  display: grid;
  align-items: center;
  padding: 2rem;
  h3 {
    text-align: center;
    font-family: ${FONTS.primary};
    margin-bottom: 1.5rem;
  }
`

const Footer = () => (
  <Container>
    <h3>
      Want to work together or just find out more? Feel free to get in contact
      through any of these ways!
    </h3>
    <SocialsLinks />
  </Container>
)

export default Footer
