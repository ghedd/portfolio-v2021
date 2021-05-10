import React from "react"
import { graphql, PageProps, useStaticQuery } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"
import Img from "../../components/gatsby-img"
import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core"

type DemoImg = {
  file: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contactDemo: {
      display: "flex",
      flexDirection: "column-reverse",
      [theme.breakpoints.up("md")]: {
        flexDirection: "column",
      },
    },
    contactDeclaration: {
      paddingBottom: theme.spacing(2),
    },
    demoImg: {
      backgroundColor: theme.palette.primary.main,
      maxHeight: "25vh",
      marginBottom: theme.spacing(2),
      "& img": {
        filter: "saturate(0.5)",
        mixBlendMode: "multiply",
      },
    },
  })
)

interface ContactDemoProps {
  imgSrc?: IGatsbyImageData
  message: string
}

const ContactDemo: React.FC<ContactDemoProps> = ({ imgSrc, message }) => {
  // TODO: change this later

  const data: DemoImg = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mail.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)
  const classes = useStyles()
  return (
    <div className={classes.contactDemo}>
      <Img
        src={imgSrc || data?.file.childImageSharp.gatsbyImageData}
        alt="Contact me!"
        className={classes.demoImg}
      />
      <Typography
        className={classes.contactDeclaration}
        component="p"
        variant="body1"
        color="textPrimary"
      >
        {message}
      </Typography>
    </div>
  )
}

export default ContactDemo
