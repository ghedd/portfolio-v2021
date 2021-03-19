import React from "react"
import {
  createStyles,
  makeStyles,
  Theme,
  useMediaQuery,
} from "@material-ui/core"
import ProjectItem from "../sections/projects-section/project-item"
import "./styles.scss"

const ProjectContainer = () => {
  const matches = useMediaQuery("(min-width: 600px)")
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      projectContainer: {
        marginTop: "5rem",
        marginBottom: "5rem",
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
  const classes = useStyles()
  const featuredContent = {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quia.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quam perferendis possimus molestias impedit ratione deserunt tempore! Quo eius impedit quidem excepturi repellendus ex eligendi.",
  }

  const lorem30 =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut nulla rerum voluptatibus eveniet nemo minus aspernatur provident fuga, ea iure delectus dolor quis unde ipsum? Aperiam dolore officia rerum dignissimos!"

  return (
    <div id="masonryContainer" className={classes.projectContainer}>
      <ProjectItem
        imageUrl="https://picsum.photos/500.webp"
        featured
        title={featuredContent.title}
        description={featuredContent.description}
      />
      <ProjectItem imageUrl="https://picsum.photos/1080/960.webp" />
      <ProjectItem imageUrl="https://picsum.photos/300/400.webp" />
      {/* <ProjectItem imageUrl="https://picsum.photos/500" />
      <ProjectItem />
      <ProjectItem description={lorem30} /> */}
    </div>
  )
}

export default ProjectContainer
