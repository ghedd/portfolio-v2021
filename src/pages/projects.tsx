import React from "react"
import MainLayout from "../components/layouts"
import { Container } from "@material-ui/core"
import SectionHeading from "../components/typography/section-heading"
import ProjectContainer from "../components/project-container"
import { graphql, PageProps } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"
import SEO from "../components/seo"

export type Tag = {
  tag: string
}
type PublicURL = {
  publicURL: string
}
type LocalFile = {
  publicURl: PublicURL
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}
type Image = {
  localFile: LocalFile
}
type Cover = {
  image: Image
  author: string
  authorTribute: string
}
type Node = {
  title: string
  desc: string
  slug: string
  featured: boolean
  favorite: boolean
  URL: string
  codeURL: string
  tools: Tag[]
  cover: Cover
}

export interface ProjectsProps {
  allStrapiProjects: {
    nodes: Node[]
  }
}

const ProjectsPage: React.FC<PageProps<ProjectsProps>> = ({ data }) => {
  // console.log(data.allStrapiProjects.nodes)

  const projects = data.allStrapiProjects.nodes.map(
    ({ title, URL, codeURL, desc, cover, tools, slug }) => {
      const stack = tools.map(({ tag }) => tag)
      const coverURL = Object.values(cover.image.localFile).toString()
      const coverImg = Object.values(cover.image.localFile.childImageSharp)[0]
      // console.log(coverImg)

      return {
        title,
        URL,
        desc: desc,
        codeURL,
        coverURL,
        coverImg: coverImg || null,
        stack,
        slug,
      }
    }
  )

  return (
    <React.Fragment>
      <SEO title="Projects" />
      <Container maxWidth="lg" style={{ position: "relative" }}>
        <SectionHeading heading="all projects" />
        <ProjectContainer isOnProjectsPage projects={projects} />
      </Container>
    </React.Fragment>
  )
}

export const PROJECTS_QUERRY = graphql`
  {
    allStrapiProjects {
      nodes {
        title
        slug
        URL
        codeURL
        desc
        cover {
          image {
            localFile {
              publicURL
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
        tools {
          tag
        }
      }
    }
  }
`

export default ProjectsPage
