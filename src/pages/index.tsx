import React from "react"

import SEO from "../components/seo"
import MainLayout from "../components/layouts/main-layout"
import HeroSection from "../components/sections/hero-section"
import ServicesSection from "../components/sections/services-section"
import ProjectsSection from "../components/sections/projects-section"

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <HeroSection />
    <ProjectsSection />
    <ServicesSection/>
  </MainLayout>
)

export default IndexPage
