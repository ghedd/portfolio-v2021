import React from "react"
import MainLayout from "../components/layouts/main-layout"
import { Container } from "@material-ui/core"
import SectionHeading from "../components/typography/section-heading"
import ProjectContainer from "../components/project-container"

const ProjectsPage: React.FC = () => {
  return (
    <MainLayout>
      <Container maxWidth="lg" style={{ position: "relative" }}>
        <SectionHeading heading="all projects" />
        <ProjectContainer isOnProjectsPage />
      </Container>
    </MainLayout>
  )
}

export default ProjectsPage
