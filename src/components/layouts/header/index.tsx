import React from "react"
import "./styles.scss"

import {
  AppBar,
  createStyles,
  makeStyles,
  Theme,
  useMediaQuery,
} from "@material-ui/core"

import { Github, LinkedIn, Twitter } from "../../../assets"
import useScroll from "../../../hooks/useScroll"
import useCustomTheme from "../../../hooks/useCustomTheme"
import MenuDrawer from "../../menu-drawer"
import NavBar from "../../navbar"


interface HeaderProps {
  siteTitle?: string
  className?: string
}
// for navbar and menu drawer
export type NavLink = {
  nav: string
  link: string
}
export type SocialMedia = {
  nav: string
  icon: any
  link: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle, className }) => {
  const matches = useMediaQuery("(min-width: 600px)")
  const { navFont } = useCustomTheme()
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        backgroundColor: theme.palette.secondary.main,
        transition: "box-shadow 300ms ease-out",
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
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
        {matches ? (
          <NavBar
            navLinks={navLinks}
            socialMediaLinks={socialMedia}
            navClasses={classes.navLinks}
          />
        ) : (
          <MenuDrawer
            navLinks={navLinks}
            socialMediaLinks={socialMedia}
            navClasses={classes.navLinks}
          />
        )}
      </AppBar>
    </header>
  )
}

export default Header
