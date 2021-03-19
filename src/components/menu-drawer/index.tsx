import React from "react"
import { navigate, Link } from "gatsby"
import clsx from "clsx"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import useCustomTheme from "../../hooks/useCustomTheme"
import {
  Drawer,
  // Button,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  Toolbar,
  Container,
  Grid,
  IconButton,
} from "@material-ui/core"
import { BrandMobile, MenuIcon } from "../../assets"
import { NavLink, SocialMedia } from "../layouts/header"

type NavClasses = {
  [key: string]: string
}
interface MenuDrawerProps {
  navLinks: NavLink[]
  socialMediaLinks: SocialMedia[]
  navClasses: NavClasses
}
type Anchor = "right"

const MenuDrawer: React.FC<MenuDrawerProps> = ({
  navLinks,
  socialMediaLinks,
  navClasses,
}) => {
  const { customBaseTheme, navFont } = useCustomTheme()

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      navContainer: {
        padding: 0,
      },
      brandMobile: {
        padding: theme.spacing(1.5),
      },
      navLinks: {
        "& > *": {
          marginRight: 0,
        },
      },
      menuIcon: {
        color: customBaseTheme.palette.primary.main,
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
      paper: {
        background: customBaseTheme.palette.secondary.light,
      },
      list: {
        width: 250,
      },
      button: {
        "&:hover, &:focus": {
          background: customBaseTheme.palette.secondary.main,
        },
      },
      socialMediaLinks: {
        "& > a": {
          textTransform: "capitalize",
          fontFamily: navFont.typography.fontFamily,
          textDecoration: "none",
          color: customBaseTheme.palette.text.primary,
        },
      },
    })
  )
  const classes = useStyles()
  const [state, setState] = React.useState({
    right: false,
  })

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = () => (
    // anchor: Anchor
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={navClasses.navLinks}>
        {navLinks.map(item => (
          <ListItem
            button
            key={item.nav}
            onClick={() => navigate(item.link)}
            className={classes.button}
          >
            {item.nav}
          </ListItem>
        ))}
      </List>
      <Divider />
      <List className={classes.socialMediaLinks}>
        {socialMediaLinks.map(item => (
          <a
            key={item.nav}
            href={item.link}
            rel="noopener noreferer"
            target="_blank"
          >
            <ListItem button className={classes.button}>
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              {item.nav}
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  )
  const anchor = "right"
  return (
    <Toolbar disableGutters>
      <Container maxWidth="sm" className={classes.navContainer}>
        <Grid container alignItems="center" justify="space-between">
          <Grid item className={classes.brandMobile}>
            <Link to="/">
              <BrandMobile />
            </Link>
          </Grid>
          <Grid item>
            <IconButton
              onClick={toggleDrawer(anchor, true)}
              classes={{ root: classes.menuIcon }}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Drawer
          classes={{ paper: classes.paper }}
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list()}
        </Drawer>
      </Container>
    </Toolbar>
  )
}

export default MenuDrawer
