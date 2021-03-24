import React from "react"
import { Link } from "gatsby"
import {
  Container,
  Toolbar,
  Grid,
  // makeStyles,
  // createStyles,
  // Theme,
} from "@material-ui/core"
import { Brand } from "../../assets"
// import useCustomTheme from "../../hooks/useCustomTheme"
import { NavLink, SocialMedia } from "../layouts/header"

interface NavBarProps {
  navLinks: NavLink[]
  socialMediaLinks: SocialMedia[]
  navClasses: any
}

const NavBar: React.FC<NavBarProps> = ({
  navLinks,
  socialMediaLinks,
  navClasses,
}) => {
  return (
    <Toolbar variant="dense" disableGutters>
      <Container maxWidth="lg">
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Link to="/">
              <Brand
                className={navClasses.brand}
              />
            </Link>
          </Grid>
          <Grid item className={navClasses.navLinks}>
            {navLinks.map(item => (
              <Link
                key={item.nav}
                to={item.link}
                className="navLink"
                activeClassName={navClasses.navLinkActive}
              >
                {item.nav}
              </Link>
            ))}
          </Grid>
          <Grid item className={navClasses.socialMedia}>
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
