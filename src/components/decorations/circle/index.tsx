import React from "react"
import { makeStyles } from "@material-ui/core"
import useCustomTheme from "../../../hooks/useCustomTheme"
// import useCustomTheme from "../../../hooks/useCustomTheme"

interface CircleProps {
  className?: string
  size?: number
  color?: string
  style?: React.CSSProperties
}

const useStyles = makeStyles({
    circleContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })


const Circle: React.FC<CircleProps> = ({
  className,
  size = 500,
  color,
  style,
}) => {
  const {
    customBaseTheme: {
      palette: {
        secondary: { light },
      },
    },
  } = useCustomTheme()

  const styles = {
    display: "block",
    width: `clamp(${size * 0.4}px, 40vw, ${size * 1.5}px)`,
    height: `clamp(${size * 0.4}px, 40vw, ${size * 1.5}px)`,
    // maxHeight: 1200,
    // maxWidth: 1200,
    backgroundColor: color || light,
    clipPath: `circle(50% at 50% 50%)`,
  }

  const classes = useStyles()
  return (
    <div className={`${className} ${classes.circleContainer}`} style={style}>
      <span style={styles} />
    </div>
  )
}

export default Circle
