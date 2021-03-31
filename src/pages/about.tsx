import React from "react"
import {
  Avatar,
  Box,
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core"
import dummyImg from "../images/gatsby-astronaut.png"
import Image from "../components/legacy/image"
import MainLayout from "../components/layouts/main-layout"
import SectionHeading from "../components/typography/section-heading"
import Circle from "../components/decorations/circle"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layout: {
      overflow: "hidden",
    },
    deco: {
      position: "absolute",
      zIndex: 0,
      transform: "translatey(-5%)",
    },
    container: {
      marginTop: "2em",
      marginBottom: "3em",
      [theme.breakpoints.up("md")]: {
        marginTop: "3.5rem",
        marginBottom: "5rem",
      },
    },
    profileImg: {
      position: "relative",
      zIndex: 1,
      display: "block",
      margin: "0 auto",
      maxWidth: 320,
      maxHeight: 320,
      borderRadius: "50%",
      [theme.breakpoints.up("md")]: {
        margin: 0,
      },
    },
  })
)

export const AboutPageDeco: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.deco}>
      <Circle size={400} />
    </div>
  )
}

const AboutPage: React.FC = () => {
  const classes = useStyles()

  return (
    <MainLayout className={classes.layout}>
      <Container maxWidth="lg" style={{ position: "relative" }}>
        <AboutPageDeco />
        <SectionHeading heading="about me" />
        <Grid
          container
          spacing={2}
          justify="space-between"
          alignItems="center"
          className={classes.container}
          style={{ position: "relative", zIndex: 1 }}
        >
          <Grid item md={5} sm={12} xs={12}>
            <Image className={classes.profileImg} />
          </Grid>
          <Grid item md={7} sm={12} xs={12}>
            <Typography variant="body1" component="p" color="textPrimary">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis vero quod nulla totam voluptatibus voluptates delectus
              eaque, voluptatem officia illo, ab cupiditate magni aliquid
              explicabo eveniet pariatur quia minus ex libero quos! Aliquam
              laborum eveniet aut doloremque ratione vel minus saepe. Ducimus
              placeat tempora, deserunt quo deleniti quibusdam, illum delectus
              necessitatibus praesentium accusamus quaerat, aperiam consequatur
              dicta ut expedita aliquid debitis maxime dolorem? Quam, quasi
              temporibus asperiores repellat cumque impedit sint neque ullam
              odit iure? Expedita voluptates fugit excepturi eos.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  )
}

export default AboutPage
