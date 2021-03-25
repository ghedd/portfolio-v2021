import React from "react"
import {
  createStyles,
  makeStyles,
  Theme,
  useMediaQuery,
} from "@material-ui/core"
import TrianglePatternHorizontal from "./triangle-pattern-hz"
import Circle from "../../../decorations/circle"
import useCustomTheme from "../../../../hooks/useCustomTheme"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    triangles: {
      display: "block",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    blogSectionDeco: {
      position: "absolute",
      top: 0,
      right: 0,
      transform: "translateY(-20%)",
      zIndex: 0,
    },
  })
)

const BlogSectionDeco = () => {
  const classes = useStyles()
  const {
    customBaseTheme: { palette },
  } = useCustomTheme()

  const md = useMediaQuery("(min-width: 960px)")

  const decoTriangles = [
    {
      bgrColor: palette.secondary.light,
    },
    {
      bgrColor: palette.primary.main,
    },
    {
      bgrColor: palette.secondary.light,
    },
  ]
  return (
    <React.Fragment>
      <div className={classes.triangles}>
        <TrianglePatternHorizontal
          itemArray={decoTriangles}
          top={md ? 0 : -80}
          right={md ? 15 : 30}
        />
      </div>
      <Circle size={200} color="#aed0cb" className={classes.blogSectionDeco} />
    </React.Fragment>
  )
}

export default BlogSectionDeco
