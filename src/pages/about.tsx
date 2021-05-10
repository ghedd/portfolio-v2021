import React from "react"
import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from "@material-ui/core"
import Image from "../components/gatsby-img"
import MainLayout from "../components/layouts"
import SectionHeading from "../components/typography/section-heading"
import Circle from "../components/decorations/circle"
import { graphql, PageProps } from "gatsby"
import ReactMarkdown from "react-markdown"
import { LocalFile } from "../@types/strapi-gatsby"
import SEO from "../components/seo"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    bio: {
      "& p": {
        fontFamily: theme.typography.fontFamily,
        color: "#fafafa",
        fontSize: theme.typography.body1.fontSize,
        lineHeight: theme.typography.body1.lineHeight,
      },
      "& * > strong": {
        color: "#1ad6bb",
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

interface AboutProps {
  strapiBio: {
    bio: string
    headshot: {
      localFile: LocalFile
    }
  }
}

const AboutPage: React.FC<PageProps<AboutProps>> = ({
  data: { strapiBio },
}) => {
  const { bio, headshot } = strapiBio
  const {
    localFile: {
      childImageSharp: { gatsbyImageData },
    },
  } = headshot

  console.log("rendered")

  const classes = useStyles()

  return (
    <React.Fragment>
      <SEO title="About" />
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
            <Image
              src={gatsbyImageData}
              alt="My profile photo"
              className={classes.profileImg}
            />
          </Grid>
          <Grid item md={7} sm={12} xs={12}>
            <ReactMarkdown className={classes.bio}>{bio}</ReactMarkdown>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export const ABOUT_PAGE_QUERY = graphql`
  {
    strapiBio {
      bio
      headshot {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

export default AboutPage
