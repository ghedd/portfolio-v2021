import React, { lazy, Suspense } from "react"
import {
  Chip,
  Container,
  createStyles,
  Link,
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
} from "@material-ui/core"

import MainLayout from "../../components/layouts"
import SEO from "../../components/seo"
import ArticleHeading from "../../components/typography/article-heading"
import MobileActionsGroup, {
  iconSet,
} from "../../components/actions-group-dpage-mobile"
import SectionHeading from "../../components/typography/section-heading"
import { graphql, PageProps } from "gatsby"
import Image from "../../components/gatsby-img"
import { Cover, Tag } from "../../@types/strapi-gatsby"

interface DetailLinkProps {
  label: string
  link: string
  iconName: keyof typeof iconSet
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      marginBottom: "clamp(3rem, 5vw, 5rem)",
    },
    cover: {
      position: "relative",
      // left: 0,
      width: "100%",
      objectFit: "cover",
      height: "clamp(40vh, 10vw, 55vh)",
      marginBottom: "clamp(1rem, 5vw, 2rem)",
    },
    caption: {
      marginBottom: "clamp(3rem, 5vw, 4.5rem)",
    },
    chip: {
      marginLeft: theme.spacing(1),
      "&:first-of-type": {
        marginLeft: 0,
      },
    },
  })
)

interface DetailsProps {
  strapiProjects: {
    title: string
    URL: string
    codeURL: string
    desc: string
    cover: Cover
    tools: Tag[]
  }
}

const ProjectDetailsPage: React.FC<PageProps<DetailsProps>> = ({
  data: { strapiProjects },
}) => {
  const { title, URL, codeURL, desc, cover, tools } = strapiProjects
  const {
    author,
    authorTribute,
    image: {
      localFile: {
        childImageSharp: { gatsbyImageData },
      },
    },
  } = cover
  const matches = useMediaQuery("(min-width: 600px)")
  const links: DetailLinkProps[] = [
    {
      label: "view live site",
      link: URL,
      iconName: "iconWeb",
    },
    {
      label: "view code",
      link: codeURL,
      iconName: "iconGitHub",
    },
    {
      label: "back to projects",
      link: "/projects",
      iconName: "iconBack",
    },
  ]

  const DesktopActionGroup = lazy(
    () => import("../../components/actions-group-dpage")
  )

  const classes = useStyles()
  return (
    <React.Fragment>
      <SEO title={title} />
      <Image src={gatsbyImageData} alt={author} className={classes.cover} />
      <Container maxWidth="lg">
        <Typography
          variant="caption"
          component="figcaption"
          color="textSecondary"
          className={classes.caption}
        >
          Photo by <Link href={authorTribute}>{author}</Link>
        </Typography>
      </Container>

      <Container maxWidth="lg">
        {!matches ? (
          <MobileActionsGroup actionsGroup={links} />
        ) : (
          <Suspense fallback={<MobileActionsGroup actionsGroup={links} />}>
            <DesktopActionGroup actionsGroup={links} />
          </Suspense>
        )}
      </Container>
      <Container maxWidth="md">
        <ArticleHeading heading={title || "Project title goes here"} />
        <section className={classes.section}>
          <SectionHeading heading="Description" />
          <Typography variant="body1" component="p" color="textPrimary">
            {desc}
          </Typography>
        </section>
        <section className={classes.section}>
          {/* map over a list of tools used in project */}
          <SectionHeading heading="Tools" />
          {tools.map((tool, idx) => (
            <Chip className={classes.chip} label={tool.tag} key={idx} />
          ))}
        </section>
      </Container>
    </React.Fragment>
  )
}

export const PROJECT_QUERY = graphql`
  query Project($slug: String) {
    strapiProjects(slug: { eq: $slug }) {
      slug
      title
      URL
      codeURL
      desc
      cover {
        author
        authorTribute
        image {
          localFile {
            publicURL
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
      tools {
        tag
      }
    }
  }
`

export default ProjectDetailsPage
