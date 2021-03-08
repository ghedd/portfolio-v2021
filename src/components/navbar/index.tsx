import React from "react"
import { Link } from "gatsby"
import {
  Container,
  Toolbar,
  Grid,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core"
import { Brand } from "../../assets"
import useCustomTheme from "../../hooks/useCustomTheme"
import { NavLink, SocialMedia } from "../layouts/header"

interface NavBarProps {
  navLinks: NavLink[]
  socialMediaLinks: SocialMedia[]
  navClasses: string
}

const NavBar: React.FC<NavBarProps> = ({
  navLinks,
  socialMediaLinks,
  navClasses,
}) => {
  const { navFont } = useCustomTheme()
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
    })
  )
  const classes = useStyles()
  return (
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
          <Grid item className={navClasses}>
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
        </Grid>
      </Container>
    </Toolbar>
  )
}
export default NavBar
