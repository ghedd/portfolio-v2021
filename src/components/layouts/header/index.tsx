import React, { useRef } from "react"
import "./styles.scss"

import {
  AppBar,
  createStyles,
  makeStyles,
  Theme,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core"

import { Github, LinkedIn, Twitter } from "../../../assets"
import useScroll from "../../../hooks/useScroll"
import useCustomTheme from "../../../hooks/useCustomTheme"
import MenuDrawer from "../../menu-drawer"
import NavBar from "../../navbar"

interface HeaderProps {
  siteTitle?: string
  // className?: string
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.secondary.main,
      transition: "box-shadow 50ms ease-out",
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      minHeight: 45,
    },
    appBar: {
      top: 50,
      boxShadow: "none",
      transition: "all 50ms ease",
      // scrollBehavior: "smooth",
    },
    brandBase: {
      maxHeight: 60,
      transition: "all 200ms ease-in",
    },
    brandShrink: {
      width: "auto",
      maxHeight: 50,
    },
    navLinks: {
      "& > *": {
        fontFamily: "Oswald",
        fontWeight: theme.typography.fontWeightMedium,
        textDecoration: "none",
        color: theme.palette.text.primary,
        textTransform: "uppercase",
        marginRight: theme.spacing(2),
      },

      "& :last-child": {
        marginRight: 0,
      },
    },
    navLink: {},
    navLinksActive: {
      color: theme.palette.primary.main,
      "&::before": {
        width: "100%",
      },
    },
    socialMedia: {
      "& > *": {
        marginRight: theme.spacing(0.5),
      },
      "& :last-child": {
        marginRight: 0,
      },
    },
  })
)

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  const matches = useMediaQuery("(min-width: 600px)")
  const { navTheme } = useCustomTheme()

  // let cssVar: React.CSSProperties = {}

  const classes = useStyles()
  const { offsetTop } = useScroll()
  const navRef = useRef<HTMLElement>(null)
  const sticky = navRef.current !== null && navRef.current.offsetTop
  const navLinks = [
    {
      nav: "home",
      link: "/",
    },
    {
      nav: "projects",
      link: "/projects",
    },
    {
      nav: "about",
      link: "/about",
    },
    {
      nav: "contact",
      link: "/contact",
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
  const navClasses = {
    navLinks: classes.navLinks,
    socialMedia: classes.socialMedia,
    navLinkActive: classes.navLinksActive,
    brand:
      offsetTop > sticky
        ? classes.brandShrink + " " + classes.brandBase
        : classes.brandBase,
  }
  return (
    <AppBar
      id="header"
      className={`${classes.root} ${
        offsetTop > sticky ? classes.appBar + "stickyNav" : classes.appBar
      }`}
      ref={navRef}
      // style={cssVar}
      // className="appBarRoot"
    >
      {matches ? (
        <NavBar
          navLinks={navLinks}
          socialMediaLinks={socialMedia}
          navClasses={navClasses}
        />
      ) : (
        <MenuDrawer
          navLinks={navLinks}
          socialMediaLinks={socialMedia}
          navClasses={navClasses}
        />
      )}
    </AppBar>
  )
}

export default Header
