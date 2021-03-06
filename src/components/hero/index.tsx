import React from "react"
import {
  Container,
  createStyles,
  // Grid,
  makeStyles,
  Theme,
  useMediaQuery,
} from "@material-ui/core"
import useCustomTheme from "../../hooks/useCustomTheme"
import TrianglePattern from "../decorations/triangle-pattern"
import Circle from "../decorations/circle"
import HeroCard from "./hero-card"

const Hero: React.FC = () => {
  const matches = useMediaQuery("(min-width:600px)")
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      heroSection: {
        height: "80vh",
        minHeight: 400,
        position: "relative",
        overflow: "hidden",
        alignItems: "center",
        display: "flex",
      },

      decorations: {
        overflow: "hidden",
      },
      decoCircle: {
        position: "absolute",
        bottom: 0,
        transform: "translateY(40%) translateX(calc(-15vw - 50%))",
        zIndex: 0,
      },
      decoTriangles: {
        display: matches ? "flex" : "none",
        position: "absolute",
        top: "5%",
        right: "calc(20% + 1vw)",
        maxWidth: 275,
        maxHeight: 300,
        // display: "flex",
      },
    })
  )

  const { customPallete } = useCustomTheme()
  const classes = useStyles()
  const trianglePatt1 = [
    { bgrColor: "#9faeb0" },
    { bgrColor: "#9faeb0" },
    { bgrColor: `${customPallete.palette.primary.main}` },
  ]
  const trianglePatt2 = [
    { bgrColor: `${customPallete.palette.secondary.light}` },
    { bgrColor: "#9faeb0" },
    { bgrColor: "#9faeb0" },
  ]
  return (
    <section id="hero" className={classes.heroSection}>
      <Container maxWidth="md">
        <HeroCard />
        <div className={classes.decorations}>
          <Circle className={classes.decoCircle} size={1400} />
          <div className={classes.decoTriangles}>
            <TrianglePattern top={10} itemArray={trianglePatt1} size={95} />
            <TrianglePattern top={15} itemArray={trianglePatt2} size={120} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
