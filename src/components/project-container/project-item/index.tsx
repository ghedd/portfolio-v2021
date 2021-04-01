import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Chip,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core"
import { navigate } from "gatsby"
import React from "react"
import { ProjectItemProps } from ".."
import CardImage from "../../decorations/card-image"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      backgroundColor: theme.palette.secondary.light,
      "&:hover *": {
        filter: "none",
      },
    },
    favorite: {
      columnSpan: "all",
      gridColumn: "span 2",
    },
    cardContent: {
      minHeight: 120,
    },
    desc: {
      width: "clamp(30ch, 18vw, 45ch)",
    },
    tag: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
      "&:last-of-type": {
        marginRight: 0,
      },
    },
  })
)
const ProjectItem: React.FC<ProjectItemProps> = ({
  // featured = false,
  stack,
  favorite = false,
  coverImg,
  title = "Title",
  desc = "Description",
  slug = "/#",
}) => {
  const classes = useStyles()
  return (
    <Card
      className={
        favorite ? ` ${classes.favorite} ${classes.item}` : classes.item
      }
    >
      <CardActionArea onClick={() => navigate(slug)}>
        <CardImage coverImg={coverImg} />
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" component="h2" gutterBottom>
            <Box fontWeight="fontWeightBold">{title}</Box>
          </Typography>
          <Typography
            className={classes.desc}
            variant="body2"
            component="p"
            paragraph
            noWrap
          >
            {desc}
          </Typography>
          {stack &&
            stack.map(tag => (
              <Chip
                key={tag}
                label={tag}
                color="secondary"
                className={classes.tag}
              />
            ))}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => navigate(slug)}>
          Learn more
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProjectItem
