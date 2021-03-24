import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core"
type ItemProps = {
  bgrColor: string
}
interface TrianglePatternProps {
  itemArray?: ItemProps[]
  positionAbsolute?: boolean
  top?: number
  left?: number
  bottom?: number
  right?: number
  size?: number
  transformTranslateX?: number
  transformTranslateY?: number
  colorFullHouse?: string
}
const TrianglePattern: React.FC<TrianglePatternProps> = ({
  itemArray,
  positionAbsolute,
  top,
  left,
  bottom,
  right,
  transformTranslateX = 0,
  transformTranslateY = 0,
  size = 100,
  colorFullHouse = "red",
}) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      triangles: {
        marginRight: theme.spacing(3),
      },
      trianglesPosition: positionAbsolute
        ? {
            position: "absolute",
            top: `${top !== undefined ? top + "%" : "unset"}`,
            left: `${left !== undefined ? left + "%" : "unset"}`,
            bottom: `${bottom !== undefined ? bottom + "%" : "unset"}`,
            right: `${right !== undefined ? right + "%" : "unset"}`,
            transform: `translateY(${transformTranslateY}%) translateX(${transformTranslateX}%)`,
          }
        : {
            position: "relative",
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
    <div
      className={`${classes.triangles} ${classes.trianglesPosition}`}
      tabIndex={-1}
    >
      {itemArray
        ? itemArray.map((item, idx) => (
            <span
              key={idx}
              className={classes.triangle}
              style={{ backgroundColor: item.bgrColor || colorFullHouse }}
            />
          ))
        : [1, 2, 3].map(idx => (
            <span
              key={idx}
              className={classes.triangle}
              style={{ backgroundColor: colorFullHouse }}
            />
          ))}
    </div>
  )
}

export default TrianglePattern
