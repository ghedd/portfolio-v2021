import React from "react"
import "./styles.scss"

import { Brand, Github, LinkedIn, Twitter } from "../../../assets"
import {
  AppBar,
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core"
import { Link } from "gatsby"
import useScroll from "../../../hooks/useScroll"
import useCustomTheme from "../../../hooks/useCustomTheme"
// import PropTypes from "prop-types"

interface HeaderProps {
  siteTitle?: string
  className?: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle, className }) => {
  const { navFont } = useCustomTheme()
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        backgroundColor: theme.palette.secondary.main,
        transition: "box-shadow 300ms ease-out",
      },
      appBar: {
        position: "absolute",
        top: 50,
        boxShadow: "none",
      },
      navLinks: {
        "& > *": {
          fontFamily: navFont.typography.fontFamily,
          fontWeight: navFont.typography.fontWeightMedium,
          textDecoration: "none",
          color: theme.palette.text.primary,
          textTransform: "uppercase",
          marginRight: theme.spacing(2),
        },
        "& :last-child": {
          marginRight: 0,
        },
      },
      socialMedia: {
        "& > *": {
          marginRight: theme.spacing(1),
        },
        "& :last-child": {
          marginRight: 0,
        },
      },
    })
  )

  const classes = useStyles()
  const { top } = useScroll()
  const navLinks = [
    {
      nav: "about",
      link: "/about",
    },
    {
      nav: "projects",
      link: "/projects",
    },
    {
      nav: "contact",
      link: "/#contact",
    },
  ]

  const socialMedia = [
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
    <header className={className} id="header">
      <AppBar
        className={`${classes.root} ${
          top >= 50 ? classes.appBar + "stickyNav" : classes.appBar
        }`}
      >
        <Toolbar>
          <Container maxWidth="lg">
            <Grid container alignItems="center" justify="space-between">
              <Grid item>
                <Link to="/">
                  <Brand />
                </Link>
              </Grid>
              <Grid item className={classes.navLinks}>
                {navLinks.map(item => (
                  <Link key={item.nav} to={item.link} className="navLink">
                    {item.nav}
                  </Link>
                ))}
              </Grid>
              <Grid item className={classes.socialMedia}>
                {socialMedia.map(item => (
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
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header
