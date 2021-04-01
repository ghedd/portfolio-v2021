import { makeStyles, useMediaQuery } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"

/* ----------------- TODO ---------------- */
// remove imageURL later on
interface CardImageProps {
  coverImg?: IGatsbyImageData
}

const CardImage: React.FC<CardImageProps> = ({ coverImg }) => {
  const matches = useMediaQuery("(min-width: 600px)")
  const useStyles = makeStyles({
    cardImage: {
      maxHeight: `${matches ? 480 : 180}px`,
      objectFit: "cover",
      objectPosition: "center",
      width: "100%",
      height: "100%",
      filter: "saturate(0)",
      transition: "filter 350ms ease",
    },
  })

  const classes = useStyles()
  const src = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `).file.childImageSharp.gatsbyImageData
  return (
    <div className={classes.cardImage}>
      <GatsbyImage
        image={coverImg || src}
        alt="whatever"
        style={{ maxHeight: 400 }}
      />
    </div>
  )
}

export default CardImage
