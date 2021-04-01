import React from "react"
import { graphql, PageProps, useStaticQuery } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
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
const ContactDemo: React.FC = () => {
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
      <GatsbyImage
        image={data?.file.childImageSharp.gatsbyImageData}
        alt="contact me!"
        className={classes.demoImg}
      />
      <Typography
        className={classes.contactDeclaration}
        component="p"
        variant="body1"
        color="textPrimary"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
        sapiente libero ut! Quam provident ab sapiente laboriosam est sed
        inventore illo autem. Obcaecati harum quibusdam commodi, quisquam vero
        beatae doloremque asperiores earum libero iste suscipit quam ex eligendi
        accusamus a.
      </Typography>
    </div>
  )
}

export default ContactDemo
