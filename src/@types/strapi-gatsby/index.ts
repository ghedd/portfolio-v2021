import { IGatsbyImageData } from "gatsby-plugin-image"

export type Tag = {
  tag: string
}
export type PublicURL = {
  publicURL: string
}
export type LocalFile = {
  publicURl?: PublicURL
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}
export type Image = {
  localFile: LocalFile
}
export type Cover = {
  image: Image
  author: string
  authorTribute: string
}