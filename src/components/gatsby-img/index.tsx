import React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

interface ImageProps {
  className?: string
  src?: IGatsbyImageData
  alt?: string
}

const Image: React.FC<ImageProps> = ({ className, src, alt = "alt text" }) => {
  return src ? (
    <GatsbyImage className={className} image={src} alt={alt} />
  ) : (
    <div>Image not available</div>
  )
}

export default Image
