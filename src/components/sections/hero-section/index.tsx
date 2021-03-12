import React from "react"
import { Container, createStyles, makeStyles, Theme } from "@material-ui/core"
import useCustomTheme from "../../../hooks/useCustomTheme"
import HeroCard from "./hero-card"
import HeroDeco from "./hero-deco"
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
    heroContainer: {
      display: "flex",
      justifyContent: "center",
    },
  })
)
const Hero: React.FC = () => {
  const classes = useStyles()

  return (
    <section id="hero" className={classes.heroSection}>
      <HeroDeco />
      <Container maxWidth="md" className={classes.heroContainer}>
        <HeroCard />
      </Container>
    </section>
  )
}

export default Hero
