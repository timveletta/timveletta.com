import React from "react"
import styled from "styled-components"

import Header from "../header"

const Container = styled.div``

const Layout = ({ children }) => (
  <Container>
    <Header />
    <main>{children}</main>
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </Container>
)

export default Layout
