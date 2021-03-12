import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core"
type ItemProps = {
  bgrColor: string
}
interface TrianglePatternProps {
  itemArray?: ItemProps[]
  top?: number
  left?: number
  size?: number
}
const TrianglePattern: React.FC<TrianglePatternProps> = ({
  itemArray,
  top = 0,
  left = 0,
  size = 100,
}) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      triangles: {
        // position: "absolute",
        // top: `${-top}%`,
        // left: `${left}%`,
        marginRight: theme.spacing(3),
        transform: `translateY(${top}%) translateY(${left}%)`,
      },
      triangle: {
        display: "block",
        height: `clamp(${(size * 70) / 100}px, 5vw, ${size}px)`,
        width: `clamp(${(size * 70) / 100}px, 5vw, ${size}px)`,
        clipPath: "polygon(50% 100%, 0 0, 100% 0)",
        marginTop: theme.spacing(1),
      },
    })
  )

  const classes = useStyles()
  return (
    <div className={classes.triangles} tabIndex={-1}>
      {itemArray
        ? itemArray.map((item, idx) => (
            <span
              key={idx}
              className={classes.triangle}
              style={{ backgroundColor: item.bgrColor }}
            />
          ))
        : [1, 2, 3].map((item, idx) => (
            <span
              key={idx}
              className={classes.triangle}
              style={{ backgroundColor: "red" }}
            />
          ))}
    </div>
  )
}

export default TrianglePattern
