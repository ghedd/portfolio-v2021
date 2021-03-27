import React from "react"
import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from "@material-ui/core"
import ContactForm from "../components/contact-form"
import MainLayout from "../components/layouts/main-layout"
import SectionHeading from "../components/sections/section-heading"
import ContactDemo from "../components/contact-demo"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: "2em",
      marginBottom: "3em",
      flexDirection: "column-reverse",
      alignItems: "stretch",
      [theme.breakpoints.up("md")]: {
        marginTop: "3.5rem",
        marginBottom: "5rem",
        flexDirection: "row",
      },
    },
  })
)

const ContactPage: React.FC = () => {
  const classes = useStyles()
  return (
    <MainLayout>
      <Container maxWidth="lg">
        <SectionHeading heading="contact" />
        <Grid
          container
          spacing={2}
          justify="space-between"
          alignItems="center"
          className={classes.container}
          style={{ position: "relative", zIndex: 1 }}
        >
          <Grid item md={6} sm={12} xs={12}>
            <ContactForm />
          </Grid>
          <Grid item md={5} sm={12} xs={12}>
            <ContactDemo />
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  )
}

export default ContactPage
