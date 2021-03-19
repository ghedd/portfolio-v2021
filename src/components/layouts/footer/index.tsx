import React from "react"
import {
  Box,
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from "@material-ui/core"
import { Github, LinkedIn, Twitter } from "../../../assets"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      background: theme.palette.secondary.dark,
      display: "flex",
      alignItems: "center",
    },
    footerSocialLinks: {
      "& > a": {
        marginRight: theme.spacing(0.5),
        "& path": {
          fill: theme.palette.primary.main,
        },
      },
      "& :last-child": {
        marginRight: 0,
      },
    },
    author: {
      color: theme.palette.primary.main,
    },
    footerContent: {
      color: theme.palette.text.primary,
      fontFamily: theme.typography.fontFamily,
    },
  })
)
const Footer: React.FC = () => {
  const classes = useStyles()

  const socialMediaLinks = [
    {
      nav: "github",
      icon: Github,
      link: "https://github.com/ghedd",
    },
    {
      nav: "linkedin",
      icon: LinkedIn,
      link: "https://www.linkedin.com/in/thinhle-eddie/",
    },
    {
      nav: "twitter",
      icon: Twitter,
      link: "https://twitter.com/EddieLewis_92",
    },
  ]

  return (
    <footer id="footer" className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container justify="space-between" alignItems="center">
          <Grid item className={classes.footerSocialLinks}>
            {socialMediaLinks.map(item => (
              <a
                key={item.nav}
                href={item.link}
                target="_blank"
                rel="noopener noreferer"
              >
                <item.icon />
              </a>
            ))}
          </Grid>
          <Grid item>
            <span className={classes.footerContent}>
              © {new Date().getFullYear()} by{" "}
              <span className={classes.author}>Thinh Le</span>
            </span>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
