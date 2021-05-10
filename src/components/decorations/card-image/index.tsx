import { makeStyles, useMediaQuery } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"

/* ----------------- TODO ---------------- */
// remove imageURL later on
interface CardImageProps {
  coverImg?: IGatsbyImageData
}
const useStyles = makeStyles({
  cardImage: {
    position: "relative",
    objectFit: "cover",
    objectPosition: "center",
    width: "100%",
    height: "100%",
    // aspectRatio: "2/3",
    filter: "saturate(0)",
    transition: "filter 350ms ease",
    // paddingTop: "66.67%",
  },
})
const CardImage: React.FC<CardImageProps> = ({ coverImg }) => {
  const matches = useMediaQuery("(min-width: 600px)")

  const src = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `).file.childImageSharp.gatsbyImageData
  const classes = useStyles()
  return (
    <div className={classes.cardImage}>
      <GatsbyImage
        image={coverImg || src}
        alt="whatever"
        style={{
          maxHeight: `${matches ? 300 : 180}px`,
        }}
      />
    </div>
  )
}

export default CardImage
