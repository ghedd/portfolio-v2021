import React from "react"
import { graphql, navigate, useStaticQuery } from "gatsby"
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heroCard: {
      position: "relative",
      background: "purple",
      minWidth: 275,
      width: "clamp(275px, 90vw, 600px)",
      minHeight: "20vh",
      zIndex: 1,
      borderRadius: 8,
      backgroundColor: "rgba(35, 62, 71, 0.2)",
      backdropFilter: "blur(25px)",
      paddingBottom: theme.spacing(2),
    },
    heroTitle: {
      fontFamily: "Oswald",
      maxWidth: "15ch",
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: "clamp(1.5rem, 10vw, 2.5rem)",
      fontWeight: theme.typography.fontWeightBold,
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
const HeroCard: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      strapiHome {
        hero
        subtitle
      }
    }
  `)
  const { hero, subtitle } = data.strapiHome
  console.log(data)

  const classes = useStyles()
  return (
    <Card className={classes.heroCard}>
      <CardContent>
        <Typography
          variant="h1"
          align="center"
          className={classes.heroTitle}
          gutterBottom={true}
        >
          {hero}
        </Typography>
        <Typography variant="subtitle1" gutterBottom={true} align="center">
          {subtitle}
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
