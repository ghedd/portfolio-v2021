import React, { lazy, Suspense } from "react"
import useIntersectionObserver from "@react-hook/intersection-observer"
import "./styles.scss"

import {
  AppBar,
  createStyles,
  makeStyles,
  Theme,
  useMediaQuery,
} from "@material-ui/core"

import { Github, LinkedIn, Twitter } from "../../../assets"
import useSSRCheck from "../../../hooks/useSSRCheck"
// import MenuDrawer from "../../menu-drawer"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.secondary.main,
      // transition: "box-shadow 50ms ease-out",
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      [theme.breakpoints.down("xs")]: {
        paddingTop: 0,
        paddingBottom: 0,
      },
      minHeight: 45,
      transition: "all 150ms linear",
      transitionDelay: "50ms",
    },
    appBar: {
      position: "sticky",
      top: 0,
      boxShadow: "none",
    },
    brandBase: {
      height: 60,
      transition: "all 400ms ease-in-out",
      transform: "scale(1)",
    },
    brandShrink: {
      // width: "auto",
      // height: 50,
      transform: "scale(0.9)",
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
interface HeaderProps {
  siteTitle?: string
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
const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  const { isSSR } = useSSRCheck()
  const [ref, setRef] = React.useState<HTMLDivElement | null>(null)
  const { isIntersecting } = useIntersectionObserver(ref)
  const matches = useMediaQuery("(min-width: 600px)")

  const classes = useStyles()

  // const { offsetTop } = useScroll()

  // const sticky
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
    brand: !isIntersecting
      ? classes.brandBase + " " + classes.brandShrink
      : classes.brandBase,
  }

  const NavBar = lazy(() => import("../../navbar"))
  const MenuDrawer = lazy(() => import("../../menu-drawer"))
  const anchor = (
    // NOTE: this is the anchor for
    // intersection observer
    // to modify header styles
    // on scroll
    <div
      style={{ position: "absolute", top: 100, width: "100%", height: 5 }}
      ref={setRef}
    ></div>
  )
  if (!isSSR)
    return (
      <React.Fragment>
        {anchor}
        <AppBar
          className={`${classes.root} ${
            isIntersecting ? classes.appBar : classes.appBar + "stickyNav"
          }
      `}
        >
          <Suspense fallback={<div />}>
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
          </Suspense>
        </AppBar>
      </React.Fragment>
    )
  return null
}

export default React.memo(Header)
