import React from "react"
import styled from "styled-components"

import Header from "../header"
import "./layout.css"

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
