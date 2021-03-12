import { makeStyles, useMediaQuery } from "@material-ui/core"
import React from "react"

interface CardImageProps {
  imageUrl: string
}

const CardImage: React.FC<CardImageProps> = ({
  imageUrl = "https://picsum.photos/300/400",
}) => {
  const matches = useMediaQuery("(min-width: 600px)")
  const useStyles = makeStyles({
    cardImage: {
      maxHeight: `${matches ? 480 : 180}px`,
      objectFit: "cover",
      objectPosition: "center",
      width: "100%",
      height: "100%",
      filter: "hue-rotate(90deg) grayscale(0.8)",
      transition: "filter 200ms ease-in-out",
    },
  })

  const classes = useStyles()
  return (
    <div>
      <img className={classes.cardImage} src={imageUrl} alt="" />
    </div>
  )
}

export default CardImage
