import React from "react"
import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      position: "relative",
      fontFamily: "Oswald",
      maxWidth: "15ch",
      // marginLeft: "auto",
      // marginRight: "auto",
      marginBottom: "clamp(3rem, 5vw, 5rem)",
      fontSize: "clamp(2.5rem, 10vw, 3rem)",
      fontWeight: theme.typography.fontWeightBold,
      "&::before": {
        content: "''",
        position: "absolute",
        display: "block",
        top: -theme.spacing(0.3),
        left: 0,
        transform: "translateY(-50%)",
        width: "20%",
        maxWidth: 80,
        height: "10%",
        background: theme.palette.primary.main,
        borderRadius: "8px",
      },
    },
  })
)
interface HeadingProps {
  heading: string
}
const ArticleHeading: React.FC<HeadingProps> = ({ heading }) => {
  const classes = useStyles()
  return (
    <Typography
      variant="h1"
      align="left"
      color="textPrimary"
      className={classes.heading}
      gutterBottom={true}
    >
      {heading}
    </Typography>
  )
}

export default ArticleHeading
