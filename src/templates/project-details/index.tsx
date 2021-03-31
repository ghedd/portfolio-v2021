import React from "react"
import MainLayout from "../../components/layouts/main-layout"
import SEO from "../../components/seo"

const ProjectDetailsPage: React.FC = () => {
  return (
    <MainLayout>
      <SEO title="Title" />
      <img src="https://picsum.photos/1080/960.webp" />
    </MainLayout>
  )
}

export default ProjectDetailsPage
