import React from "react"
import "./styles.scss"
import { makeStyles, createStyles, Theme } from "@material-ui/core"
type ItemProps = {
  bgrColor: string
}
interface TrianglePatternHzProps {
  itemArray?: ItemProps[]
  top?: number
  left?: number | "inherit"
  right?: number | "inherit"
  size?: number
}
const TrianglePatternHorizontal: React.FC<TrianglePatternHzProps> = ({
  itemArray,
  top = 0,
  left = "inherit",
  right = "inherit",
  size = 100,
}) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      triangles: {
        position: "absolute",
        zIndex: 1,
        // top: `${-top}%`,
        left: `${left}%`,
        right: `${right}%`,
        display: "flex",
        transform: `translateY(${top}%)`,
        "& > *": {
          marginRight: theme.spacing(1),
        },
        "& :last-child": {
          marginRight: 0,
        },
      },
      triangle: {
        display: "block",
        height: `clamp(${(size * 70) / 100}px, 5vw, ${size}px)`,
        width: `clamp(${(size * 70) / 100}px, 5vw, ${size}px)`,
        clipPath: "polygon(50% 100%, 0 0, 100% 0)",
      },
    })
  )

  const classes = useStyles()
  return (
    <div className={classes.triangles}>
      {itemArray
        ? itemArray.map((item, idx) => (
            // <span
            //   key={idx}
            //   className={`${classes.triangle} triangleSpin`}
            //   style={{
            //     backgroundColor: item.bgrColor,
            //     animationDuration: `calc(${idx} * 90ms + 2400ms)`,
            //     animationDelay: `${idx} * 100ms`,
            //   }}
            // />
            <svg
              width="66"
              height="63"
              viewBox="0 0 66 63"
              fill="none"
              className={`${classes.triangle} triangleSpin`}
              style={{
                animationDuration: `calc(${idx} * 90ms + 3600ms)`,
                animationDelay: `${idx} * 100ms`,
              }}
            >
              <path
                key={idx}
                d="M32.9725 63L65.8577 0.273205H0.0873566L32.9725 63Z"
                fill={`${item.bgrColor}`}
              />
            </svg>
          ))
        : [1, 2, 3].map((item, idx) => (
            <span
              key={idx}
              className={`${classes.triangle} triangleSpin`}
              style={{
                backgroundColor: "red",
                animationDuration: `calc(${idx} * 90ms + 4800ms)`,
                animationDelay: `${idx} * 100ms`,
              }}
            />
          ))}
    </div>
  )
}

export default TrianglePatternHorizontal