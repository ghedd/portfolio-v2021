import React from "react"
import {
  createStyles,
  makeStyles,
  Theme,
  useMediaQuery,
} from "@material-ui/core"
import useCustomTheme from "../../../../hooks/useCustomTheme"
import Circle from "../../../decorations/circle"
import TrianglePattern from "../../../decorations/triangle-pattern"

const HeroDeco: React.FC = () => {
  const matches = useMediaQuery("(min-width:600px)")
  const { customBaseTheme } = useCustomTheme()
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      decorations: {
        // overflow: "hidden",
      },
      decoCircle: {
        position: "absolute",
        bottom: 0,
        transform: "translateY(40%) translateX(calc(30vw - 70%))",
        zIndex: 0,
      },
      decoTriangles: {
        display: matches ? "flex" : "none",
        position: "absolute",
        maxWidth: 275,
        maxHeight: 300,
      },
      decoTriangles1: {
        top: "8%",
        right: "calc(22% + 1vw)",
      },
      decoTriangles2: {
        bottom: "15%",
        right: "calc(18% + 1vw)",
      },
    })
  )
  const classes = useStyles()
  const trianglePatt1 = [
    { bgrColor: "#9faeb0" },
    { bgrColor: "#9faeb0" },
    { bgrColor: `${customBaseTheme.palette.primary.main}` },
  ]
  const trianglePatt2 = [
    { bgrColor: `${customBaseTheme.palette.secondary.light}` },
    { bgrColor: "#9faeb0" },
    { bgrColor: "#9faeb0" },
  ]
  const trianglePatt3 = [
    { bgrColor: "#9faeb0" },
    { bgrColor: `${customBaseTheme.palette.secondary.light}` },
    { bgrColor: "#9faeb0" },
  ]
  const trianglePatt4 = [
    { bgrColor: "#9faeb0" },
    { bgrColor: "#9faeb0" },
    { bgrColor: `${customBaseTheme.palette.secondary.light}` },
  ]
  return (
    <div className={classes.decorations}>
      {/* <Circle className={classes.decoCircle} size={1300} /> */}
      <div className={`${classes.decoTriangles} ${classes.decoTriangles1}`}>
        <TrianglePattern itemArray={trianglePatt1} size={65} />
        <TrianglePattern
          transformTranslateY={10}
          itemArray={trianglePatt2}
          size={65}
        />
      </div>
      <div className={`${classes.decoTriangles} ${classes.decoTriangles2}`}>
        <TrianglePattern
          transformTranslateY={15}
          itemArray={trianglePatt3}
          size={65}
        />
        <TrianglePattern itemArray={trianglePatt4} size={65} />
      </div>
    </div>
  )
}

export default HeroDeco
