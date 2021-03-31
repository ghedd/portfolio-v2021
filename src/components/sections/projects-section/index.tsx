import { Container, createStyles, makeStyles } from "@material-ui/core"
import React from "react"
import SectionHeading from "../../typography/section-heading"
import ProjectContainer from "../../project-container"
import ProjectsDeco from "./projects-deco"

const useStyles = makeStyles(() =>
  createStyles({
    projectsSection: {
      // overflow: "hidden",
      position: "relative",
      // minHeight: "80vh",
      display: "flex",
      // justifyContent: "center"
    },
  })
)
const ProjectsSection: React.FC = () => {
  const classes = useStyles()
  return (
    <section id="projects" className={classes.projectsSection}>
      <ProjectsDeco />
      <Container maxWidth="lg">
        <SectionHeading heading="projects" />
        <ProjectContainer />
      </Container>
    </section>
  )
}

export default ProjectsSection
