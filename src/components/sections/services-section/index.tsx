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
      marginTop: "5rem",
      marginBottom: "5rem",
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
        justifyContent: "center",
      },
    },
    serviceItem: {
      minWidth: 300,
    },
    serviceCard: {
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
    <section>
      <Container maxWidth="lg">
        <SectionHeading heading="services" />
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          spacing={2}
          className={classes.servicesContainer}
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
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    align="center"
                  >
                    <Box fontWeight="fontWeightBold">{service.serviceName}</Box>
                  </Typography>
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
