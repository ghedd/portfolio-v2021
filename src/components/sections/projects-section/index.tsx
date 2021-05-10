import { Container, createStyles, makeStyles } from "@material-ui/core"
import React from "react"
import SectionHeading from "../../typography/section-heading"
import ProjectContainer from "../../project-container"
import ProjectsDeco from "./projects-deco"
import { graphql, useStaticQuery } from "gatsby"

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
  const data = useStaticQuery(graphql`
    {
      allStrapiProjects(filter: { featured: { eq: true } }) {
        nodes {
          title
          URL
          codeURL
          desc
          slug
          favorite
          tools {
            tag
          }
          cover {
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
          }
          desc
        }
      }
    }
  `)

  const projects = data.allStrapiProjects.nodes
    .map(
      (
        { title, URL, codeURL, desc, cover, tools, slug, favorite }: any,
        idx: number
      ) => {
        const coverImg = cover.image.localFile.childImageSharp.gatsbyImageData
        const stack = tools.map(({ tag }: any) => tag)
        const item = {
          title,
          URL,
          codeURL,
          desc,
          coverImg,
          stack,
          slug: `/projects/${slug}`,
          favorite,
        }

        return item
      }
    )
    .sort((item: any) => (item.favorite ? -1 : 1))

  const classes = useStyles()
  return (
    <section id="projects" className={classes.projectsSection}>
      <ProjectsDeco />
      <Container maxWidth="lg">
        <SectionHeading heading="projects" />
        <ProjectContainer projects={projects} />
      </Container>
    </section>
  )
}

export default ProjectsSection
