import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core"
// import useCustomTheme from "../../../hooks/useCustomTheme"

interface CircleProps {
  className?: string
  size?: number
  color?: string
}

const Circle: React.FC<CircleProps> = ({ className, size = 500, color }) => {
  // const { customBaseTheme } = useCustomTheme()
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      circleContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },

      circle: {
        display: "block",
        width: `clamp(${size * 0.4}px, 40vw, ${size * 1.5}px)`,
        height: `clamp(${size * 0.4}px, 40vw, ${size * 1.5}px)`,
        // maxHeight: 1200,
        // maxWidth: 1200,
        backgroundColor: color || theme.palette.secondary.light,
        clipPath: `circle(50% at 50% 50%)`,
      },
    })
  )
  const classes = useStyles()
  return (
    <div className={className}>
      <span className={classes.circle} />
    </div>
  )
}

export default Circle
