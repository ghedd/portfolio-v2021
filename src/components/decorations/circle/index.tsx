import React from "react"
import { createStyles, makeStyles } from "@material-ui/core"
import useCustomTheme from "../../../hooks/useCustomTheme"

interface CircleProps {
  className?: string
  size?: number
}

const Circle: React.FC<CircleProps> = ({ className, size = 1000 }) => {
  const { customPallete } = useCustomTheme()
  const useStyles = makeStyles(() =>
    createStyles({
      circleContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },

      circle: {
        display: "block",
        width: size,
        height: size,
        maxHeight: 1200,
        maxWidth: 1200,
        backgroundColor: customPallete.palette.secondary.light,
        clipPath: `circle(calc(${size / 60}% + 5vw) at 50% 50%)`,
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
