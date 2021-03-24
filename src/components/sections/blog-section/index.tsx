import React from "react"
import {
  Container,
  Grid,
  Typography,
  Box,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core"
import SectionHeading from "../section-heading"
import BlogSectionDeco from "./blog-section-deco"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    blogSection: {
      // overflow: "hidden",
      position: "relative",
    },
    blogSectionContainer: {
      position: "relative",
    },
    blogComingSoon: {
      [theme.breakpoints.down("xs")]: {
        background: "#233e47a3",
        padding: theme.spacing(1),
        borderRadius: 3,
        backdropFilter: "blur(5px)",
      },
      position: "relative",
      zIndex: 1,
      color: theme.palette.text.primary,
    },
  })
)

const BlogSection: React.FC = () => {
  const classes = useStyles()
  return (
    <section className={classes.blogSection}>
      <Container maxWidth="lg">
        <SectionHeading heading="blog" />
        <Grid container className={`container ${classes.blogSectionContainer}`}>
          <BlogSectionDeco />
          <Grid item xs={12} sm={6} className={classes.blogComingSoon}>
            <Typography variant="h5" component="h2" gutterBottom>
              <Box fontWeight="fontWeightBold">Coming Soon!</Box>
            </Typography>
            <Typography variant="body1" component="p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo, exercitationem eum. Explicabo, praesentium inventore a
              velit expedita distinctio magni placeat?
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default BlogSection
