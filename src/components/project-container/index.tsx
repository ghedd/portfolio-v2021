import React from "react"
import {
  createStyles,
  makeStyles,
  Theme,
  // useMediaQuery,
} from "@material-ui/core"
import ProjectItem from "./project-item"
import "./styles.scss"

type tag = {
  name: string
}
export interface ProjectItemProps {
  isOnProjectsPage?: boolean
  projectTitle?: string
  projectDesc?: string
  coverPhotoURL?: string
  techStack?: tag[]
  featured?: boolean
  favorite?: boolean
  figmaLink?: string
  slug?: string
}
interface ProjectsProps {
  projects?: ProjectItemProps[]
  isOnProjectsPage?: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    projectContainer: {
      // marginTop: "5rem",
      // marginBottom: "5rem",
      position: "relative",
      width: "100%",
      // gridTemplateColumns: `repeat(${ matches ? 3 : 1 }, 1fr)`,
      gridTemplateColumns: "1fr",
      [theme.breakpoints.up("sm")]: {
        gridTemplateColumns: "repeat(3, 1fr)",
        columns: 3,
        gap: `${theme.spacing(2.5)}px`,
      },
      gap: `${theme.spacing(2.5)}px 0`,
      // gap: `${theme.spacing(2.5)}px ${matches ? theme.spacing(2.5) : 0}px`,
      // columnGap: `${matches ? theme.spacing(1.5) : 0}`,
      // columns: `${matches ? 3 : 1}`,
      "& > *": {
        marginBottom: theme.spacing(2.5),
      },
    },
  })
)
const ProjectContainer: React.FC<ProjectsProps> = ({
  projects,
  isOnProjectsPage,
}) => {
  // const matches = useMediaQuery("(min-width: 600px)")

  const classes = useStyles()
  const featuredContent = {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quia.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quam perferendis possimus molestias impedit ratione deserunt tempore! Quo eius impedit quidem excepturi repellendus ex eligendi.",
  }

  const demoItems = (
    <React.Fragment>
      <ProjectItem
        isOnProjectsPage={isOnProjectsPage}
        coverPhotoURL="https://picsum.photos/500.webp"
        featured
        favorite
        projectTitle={featuredContent.title}
        projectDesc={featuredContent.description}
      />
      <ProjectItem coverPhotoURL="https://picsum.photos/1080/960.webp" />
      <ProjectItem coverPhotoURL="https://picsum.photos/300/400.webp" />
    </React.Fragment>
  )

  const items = (
    <React.Fragment>
      {projects &&
        projects.map(
          ({
            projectTitle,
            projectDesc,
            coverPhotoURL,
            slug,
            favorite,
            featured,
            // favorite,
          }) => (
            <ProjectItem
              key={projectTitle}
              isOnProjectsPage={isOnProjectsPage}
              featured
              favorite
              coverPhotoURL={coverPhotoURL}
              projectTitle={projectTitle}
              projectDesc={projectDesc}
            />
          )
        )}
    </React.Fragment>
  )

  return (
    <div
      id="masonryContainer"
      className={`container ${classes.projectContainer}`}
    >
      {projects ? items : demoItems}
    </div>
  )
}

export default ProjectContainer
