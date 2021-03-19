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
import CardImage from "../../../decorations/card-image"
interface ProjectItemProps {
  featured?: boolean
  imageUrl?: string
  title?: string
  description?: string
  link?: string
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  featured = false,
  imageUrl = "https://picsum.photos/200/300.webp",
  title = "Title",
  description = "Description",
  link = "/#",
}) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      item: {
        backgroundColor: theme.palette.secondary.light,
        "&:hover img": {
          filter: "none",
        },
      },

      featured: {
        columnSpan: "all",
        gridColumn: "span 2",
      },
    })
  )

  const classes = useStyles()
  return (
    <Card
      className={
        featured ? ` ${classes.featured} ${classes.item}` : classes.item
      }
    >
      <CardActionArea>
        <CardImage imageUrl={imageUrl} />
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            <Box fontWeight="fontWeightBold">{title}</Box>
          </Typography>
          <Typography variant="body2" component="p" color="textSecondary">
            {description}
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
