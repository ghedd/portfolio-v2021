import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import MainLayout from "../components/layouts/main-layout"
import Hero from "../components/sections/hero-section"

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <Hero />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </MainLayout>
)

export default IndexPage
