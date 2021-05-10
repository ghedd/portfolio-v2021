import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core"
import React from "react"

interface SectionHeadingProps {
  heading?: string
  className?: string
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sectionHeading: {
      marginTop: theme.spacing(2),
      position: "relative",
      fontFamily: "Oswald",
      color: theme.palette.primary.light,
      fontSize: "clamp(1.5rem, 5vw, 2rem)",
      fontWeight: theme.typography.fontWeightMedium,
      "&::before": {
        content: "''",
        position: "absolute",
        display: "block",
        top: -theme.spacing(0.3),
        left: 0,
        transform: "translateY(-50%)",
        width: "clamp(2rem, 5vw, 2.5rem)",
        height: "clamp(0.2rem, 5vw, 0.4rem)",
        background: theme.palette.primary.main,
        borderRadius: "8px",
      },
    },
  })
)
const SectionHeading: React.FC<SectionHeadingProps> = ({
  heading = "heading",
  className,
}) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Typography
        variant="h4"
        className={`${classes.sectionHeading} ${className}`}
        gutterBottom={true}
      >
        {heading}
      </Typography>
    </React.Fragment>
  )
}

export default SectionHeading
