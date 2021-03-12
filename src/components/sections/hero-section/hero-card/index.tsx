import React from "react"
import { navigate } from "gatsby"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core"
import useCustomTheme from "../../../../hooks/useCustomTheme"

const HeroCard: React.FC = () => {
  const { customTitleFont } = useCustomTheme()
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      heroElement: {
        position: "relative",
        background: "purple",
        // minWidth: 275,
        width: "clamp(275px, 90vw, 800px)",
        minHeight: "20vh",
        zIndex: 1,
        borderRadius: 8,
        backgroundColor: "rgba(35, 62, 71, 0.2)",
        backdropFilter: "blur(25px)",
        paddingBottom: theme.spacing(2),
      },
      heroTitle: {
        fontFamily: customTitleFont.typography.fontFamily,
        maxWidth: "15ch",
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: "clamp(2.5rem, 10vw, 4rem)",
        fontWeight: customTitleFont.typography.fontWeightBold,
      },
      heroActionContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: theme.spacing(2),
      },
      heroActionBtn: {
        fontWeight: theme.typography.fontWeightBold,
      },
    })
  )
  const classes = useStyles()
  return (
    <Card className={classes.heroElement}>
      <CardContent>
        <Typography
          variant="h1"
          align="center"
          className={classes.heroTitle}
          gutterBottom={true}
        >
          Call to actions goes here
        </Typography>
        <Typography variant="subtitle1" gutterBottom={true} align="center">
          Hi, I’m Eddie. <br />I help design and build modern websites.
        </Typography>
      </CardContent>
      <CardActions className={classes.heroActionContainer}>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          className={classes.heroActionBtn}
          onClick={() => navigate("/#projects")}
        >
          view my work
        </Button>
      </CardActions>
    </Card>
  )
}

export default HeroCard
