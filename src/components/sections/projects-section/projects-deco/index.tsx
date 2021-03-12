import { makeStyles, Theme, createStyles } from "@material-ui/core"
import React from "react"
import Circle from "../../../decorations/circle"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    decorations: {
      // overflow: "hidden",
    },
    decoCircle: {
      position: "absolute",
      top: 0,
      transform: "translateY(-60%) translateX(calc(30vw - 70%))",
      zIndex: 0,
    },
  })
)
const ProjectsDeco: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.decorations}>
      <Circle size={1300} className={classes.decoCircle} />
    </div>
  )
}

export default ProjectsDeco
