import React from "react"

import SEO from "../components/seo"
import MainLayout from "../components/layouts"
import HeroSection from "../components/sections/hero-section"
import ServicesSection from "../components/sections/services-section"
import ProjectsSection from "../components/sections/projects-section"
import BlogSection from "../components/sections/blog-section"

const IndexPage: React.FC = () => {
  return (
    <React.Fragment>
      <SEO title="Home" />
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <BlogSection />
    </React.Fragment>
  )
}

export default IndexPage
