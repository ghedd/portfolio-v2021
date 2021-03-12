import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core"
import React from "react"
import useCustomTheme from "../../../hooks/useCustomTheme"

interface SectionHeadingProps {
  heading?: string
}
const SectionHeading: React.FC<SectionHeadingProps> = ({
  heading = "heading",
}) => {
  const { navFont, customBaseTheme } = useCustomTheme()
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      sectionHeading: {
        marginTop: theme.spacing(2),
        position: "relative",
        fontFamily: navFont.typography.fontFamily,
        color: customBaseTheme.palette.primary.light,
        fontSize: "clamp(1.5rem, 5vw, 2rem)",
        fontWeight: navFont.typography.fontWeightBold,
        "&::before": {
          content: "''",
          position: "absolute",
          display: "block",
          top: -theme.spacing(0.3),
          left: 0,
          transform: "translateY(-50%)",
          width: "clamp(2rem, 5vw, 2.5rem)",
          height: "clamp(0.2rem, 5vw, 0.4rem)",
          background: customBaseTheme.palette.primary.main,
          borderRadius: "8px",
        },
      },
    })
  )
  const classes = useStyles()
  return (
    <React.Fragment>
      <Typography variant="h4" className={classes.sectionHeading} gutterBottom={true}>
        {heading}
      </Typography>
    </React.Fragment>
  )
}

export default SectionHeading
