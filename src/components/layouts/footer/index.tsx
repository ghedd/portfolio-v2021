import React from "react"
import { Brand } from "../../../assets"

import {
  Container,
  createStyles,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
} from "@material-ui/core"
import { Github, LinkedIn, Twitter } from "../../../assets"
import SectionHeading from "../../typography/section-heading"
import { navigate } from "gatsby"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      position: "relative",
      background: theme.palette.secondary.dark,
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      // flexDirection: "column",
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    brandContainer: {
      "& svg": {
        height: 45,
        width: "auto",
        filter: "saturate(0.25)",
      },
      marginBottom: "2rem",
    },
    container: {
      display: "grid",
      gap: "2.5rem 1.5rem",
      marginBottom: "3rem",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
        gridTemplateGrow: "auto",
      },
    },
    footerItem: {
      display: "flex",
      flexDirection: "column",
      placeItems: "center",
    },
    footerItemHd: {
      fontSize: theme.typography.body1.fontSize,
      "&:before": {
        width: 30,
        left: "50%",
        top: -10,
        transform: "translateX(-50%) translateY(-50%)",
      },
    },
    navLinks: {
      gridColumn: "1/2",
      [theme.breakpoints.down("sm")]: {
        gridColumn: "1/-1",
      },
    },
    socialNetwork: {
      gridColumn: "2/3",
      [theme.breakpoints.down("sm")]: {
        gridColumn: "1/-1",
      },
    },
    profile: {
      gridColumn: "3/-1",
      [theme.breakpoints.down("sm")]: {
        gridColumn: "1/-1",
      },
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
    copyrightContainer: {
      display: "flex",
      placeContent: "center",
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
      name: "Github",
      icon: Github,
      link: "https://github.com/ghedd",
    },
    {
      name: "Linkedin",
      icon: LinkedIn,
      link: "https://www.linkedin.com/in/thinhle-eddie/",
    },
    {
      name: "Twitter",
      icon: Twitter,
      link: "https://twitter.com/EddieLewis_92",
    },
  ]

  const navLinks = [
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Sitemap",
      link: "/",
    },
  ]

  const profileLinks = [
    {
      name: "My Resume",
      link: "/",
    },
  ]
  const footerDeprecated = (
    <footer id="footer" className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container justify="space-between" alignItems="center">
          <Grid item className={classes.footerSocialLinks}>
            {socialMediaLinks.map(item => (
              <a
                key={item.name}
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
  return (
    <footer id="footer" className={classes.footer}>
      <Container maxWidth="lg" className={classes.brandContainer}>
        <Brand />
      </Container>
      <Container maxWidth="md" className={classes.container}>
        <div className={`${classes.navLinks} ${classes.footerItem}`}>
          <SectionHeading
            heading="navigation"
            className={classes.footerItemHd}
          />
          <List component="footer" dense>
            {navLinks.map((nav, idx) => (
              <ListItem
                key={idx}
                component="a"
                onClick={() => navigate(nav.link)}
                disableGutters
                style={{ cursor: "pointer" }}
              >
                <ListItemText
                  secondary={nav.name}
                  style={{ textAlign: "center" }}
                />
              </ListItem>
            ))}
          </List>
        </div>
        <div className={`${classes.socialNetwork} ${classes.footerItem}`}>
          <SectionHeading
            heading="social network"
            className={classes.footerItemHd}
          />
          <List
            component="footer"
            dense
            className={`${classes.socialNetwork} ${classes.footerItem}`}
          >
            {socialMediaLinks.map((nav, idx) => (
              <ListItem
                key={idx}
                component="a"
                disableGutters
                href={nav.link}
                target="_blank"
                rel="noopener noreferer"
              >
                <ListItemIcon>
                  <nav.icon />
                </ListItemIcon>
                <ListItemText secondary={nav.name} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className={`${classes.profile} ${classes.footerItem}`}>
          <SectionHeading
            heading="my profile"
            className={classes.footerItemHd}
          />
          <List component="footer" dense>
            {profileLinks.map((nav, idx) => (
              <ListItem
                key={idx}
                component="a"
                disableGutters
                href={nav.link}
                target="_blank"
                rel="noopener noreferer"
              >
                <ListItemText secondary={nav.name} />
              </ListItem>
            ))}
          </List>
        </div>
      </Container>
      <Container maxWidth="md" className={classes.copyrightContainer}>
        <span className={classes.footerContent}>
          © {new Date().getFullYear()} by{" "}
          <span className={classes.author}>Thinh Le</span>
        </span>
      </Container>
    </footer>
  )
}

export default React.memo(Footer)
