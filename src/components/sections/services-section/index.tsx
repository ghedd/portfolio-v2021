import React from "react"
import {
  Box,
  Card,
  CardContent,
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core"
import CodeIcon from "@material-ui/icons/Code"
import DesignIcon from "@material-ui/icons/Palette"
import SectionHeading from "../section-heading"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    servicesContainer: {
      marginTop: "2em",
      marginBottom: "3em",
      [theme.breakpoints.up("sm")]: {
        marginTop: "3.5em",
        marginBottom: "5em",
        flexDirection: "row",
        justifyContent: "center",
      },
    },
    serviceItem: {
      minWidth: 300,
    },
    serviceCard: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "clamp(150px, 10vw, 220px)",
      background: theme.palette.secondary.light,
      transition: "all 250ms ease-in-out",
      "&:hover": {
        background: theme.palette.primary.light,
      },
      "&:hover > *": {
        color: theme.palette.secondary.dark,
      },
    },
    serviceIcon: {
      marginBottom: theme.spacing(2),
      width: "auto",
      height: 30,
    },

    serviceCardContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    serviceContentDesc: {
      // color: theme.palette.text.secondary,
      maxWidth: "60ch",
    },
  })
)

const ServicesSection: React.FC = () => {
  const services = [
    {
      serviceIcon: CodeIcon,
      serviceName: "Web Development",
      serviceDesc:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, provident.",
    },
    {
      serviceIcon: DesignIcon,
      serviceName: "Web Design",
      serviceDesc:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, provident.",
    },
  ]
  const classes = useStyles()
  return (
    <section style={{ position: "relative", zIndex: 1 }}>
      <Container maxWidth="lg">
        <SectionHeading heading="services" />
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
          className={`container ${classes.servicesContainer}`}
        >
          {services.map(service => (
            <Grid
              key={service.serviceName}
              item
              className={classes.serviceItem}
              xs={12}
              md={6}
              // lg={6}
            >
              <Card className={classes.serviceCard}>
                <CardContent className={classes.serviceCardContent}>
                  <service.serviceIcon className={classes.serviceIcon} />
                  <Box fontWeight="fontWeightBold">
                    <Typography
                      variant="h5"
                      component="h2"
                      gutterBottom
                      align="center"
                    >
                      {service.serviceName}
                    </Typography>
                  </Box>
                  <Typography
                    className={classes.serviceContentDesc}
                    variant="body2"
                    align="center"
                    gutterBottom
                  >
                    {service.serviceDesc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default ServicesSection
