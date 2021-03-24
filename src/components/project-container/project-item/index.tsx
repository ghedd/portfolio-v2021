import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core"
import React from "react"
import { ProjectItemProps } from ".."
import CardImage from "../../decorations/card-image"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      backgroundColor: theme.palette.secondary.light,
      "&:hover img": {
        filter: "none",
      },
    },
    favorite: {
      columnSpan: "all",
      gridColumn: "span 2",
    },
  })
)
const ProjectItem: React.FC<ProjectItemProps> = ({
  isOnProjectsPage = false,
  featured = false,
  favorite = false,
  coverPhotoURL = "https://picsum.photos/200/300.webp",
  projectTitle = "Title",
  projectDesc = "Description",
  slug = "/#",
}) => {
  const classes = useStyles()
  return (
    <Card
      className={
        favorite && !isOnProjectsPage
          ? ` ${classes.favorite} ${classes.item}`
          : classes.item
      }
    >
      <CardActionArea>
        <CardImage imageUrl={coverPhotoURL} />
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            <Box fontWeight="fontWeightBold">{projectTitle}</Box>
          </Typography>
          <Typography variant="body2" component="p">
            {projectDesc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn more
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProjectItem
