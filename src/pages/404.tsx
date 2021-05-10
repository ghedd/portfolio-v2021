import {
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import SectionHeading from "../components/typography/section-heading"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backHomeLink: {
      color: theme.palette.primary.main,
    },
  })
)

const NotFoundPage: React.FC = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <SEO title="404: Not found" />
      <Container maxWidth="lg" style={{ position: "relative" }}>
        {/* {deco} */}

        <SectionHeading heading="404: not found" />
        <Typography
          variant="subtitle1"
          component="p"
          color="textPrimary"
          paragraph
        >
          You just hit a route that doesn&#39;t exist... the sadness.{" "}
        </Typography>
        <Link to="/" className={classes.backHomeLink}>
          <Typography variant="subtitle1" component="a">
            Go back home
          </Typography>
        </Link>
      </Container>
    </React.Fragment>
  )
}

export default NotFoundPage
