import React from "react"
import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from "@material-ui/core"
import ContactForm from "../components/contact-form"
import MainLayout from "../components/layouts"
import SectionHeading from "../components/typography/section-heading"
import ContactDemo from "../components/contact-demo"
import { graphql, PageProps } from "gatsby"
import { LocalFile } from "../@types/strapi-gatsby"
import SEO from "../components/seo"

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

interface ContactProps {
  strapiContact: {
    message: string
    illustration: {
      localFile: LocalFile
    }
  }
}
const ContactPage: React.FC<PageProps<ContactProps>> = ({
  data: { strapiContact },
}) => {
  const { message, illustration } = strapiContact
  const illsImg = illustration.localFile.childImageSharp.gatsbyImageData
  const classes = useStyles()
  return (
    <React.Fragment>
      <SEO title="Contact" />
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
            <ContactDemo message={message} imgSrc={illsImg} />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export const CONTACT_PAGE_QUERY = graphql`
  {
    strapiContact {
      message
      illustration {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
export default ContactPage
