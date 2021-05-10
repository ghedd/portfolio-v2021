import React from "react"
import {
  createStyles,
  makeStyles,
  Theme,
  // useMediaQuery,
} from "@material-ui/core"
import ProjectItem from "./project-item"
import "./styles.scss"
import { IGatsbyImageData } from "gatsby-plugin-image"

export interface ProjectItemProps {
  title?: string
  slug?: string
  desc?: string
  coverURL?: string
  coverImg?: IGatsbyImageData
  stack?: string[]
  featured?: boolean
  favorite?: boolean
  figmaURL?: string
}
interface ProjectsProps {
  projects?: ProjectItemProps[]
  isOnProjectsPage?: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    projectContainer: {
      position: "relative",
      width: "100%",

      gridTemplateColumns: "1fr",
      [theme.breakpoints.up("sm")]: {
        gridTemplateColumns: "repeat(3, 1fr)",
        columns: 3,
        gap: `${theme.spacing(2.5)}px`,
      },
      gap: `${theme.spacing(2.5)}px 0`,

      "& > *": {
        marginBottom: theme.spacing(2.5),
      },
    },
  })
)
const ProjectContainer: React.FC<ProjectsProps> = ({
  projects,
  isOnProjectsPage = false,
}) => {
  // const matches = useMediaQuery("(min-width: 600px)")

  const classes = useStyles()
  const featuredContentMockup = {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quia.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quam perferendis possimus molestias impedit ratione deserunt tempore! Quo eius impedit quidem excepturi repellendus ex eligendi.",
  }

  const demoItems = (
    <React.Fragment>
      <ProjectItem
        featured
        favorite
        title={featuredContentMockup.title}
        desc={featuredContentMockup.description}
      />
      <ProjectItem />
      <ProjectItem />
    </React.Fragment>
  )

  const items = (
    <React.Fragment>
      {projects?.map(
        (
          { title, desc, coverURL, slug, favorite, featured, stack, coverImg },
          idx
        ) => {
          if (favorite) {
            return (
              <ProjectItem
                key={0}
                featured={featured}
                favorite={favorite}
                coverURL={coverURL}
                title={title}
                desc={desc}
                slug={slug}
                stack={stack}
                coverImg={coverImg}
              />
            )
          }
          return (
            <ProjectItem
              key={idx + 1}
              featured={featured}
              favorite={favorite}
              coverURL={coverURL}
              title={title}
              desc={desc}
              slug={slug}
              stack={stack}
              coverImg={coverImg}
            />
          )
        }
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
