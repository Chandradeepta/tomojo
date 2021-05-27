import { Grid, makeStyles, Typography } from "@material-ui/core";
import { AnimationClasses } from "../../Components/Utils/AnimationClasses";
import clsx from "clsx";
import ContactUsForm from "../../Components/Landing page/ContactUsForm";
import ContactInfo from "../../Components/Landing page/ContactInfo";

const useStyles = makeStyles((theme) => ({
  initialContainer: {
    padding: "6%",
    height: "100%",
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    [theme.breakpoints.down("sm")]: {
      paddingTop: "10%",
    },
  },
  contentContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  contentContainer_alt: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  centerAlign: {
    textAlign: "center",
  },
  animated: {
    animationDuration: "1s",
    animationFillMode: "both",
  },
  animatedFade: {
    opacity: 0,
  },
  download: {
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  ...AnimationClasses,
}));

export default function LandingPageContact(props) {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.initialContainer}>
        <Grid
          container
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.contentContainer}
        >
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className={classes.textContainer}
          >
            <Typography
              variant="h3"
              className={clsx(
                classes.bold,
                classes.animated,
                classes.animatedFade,
                classes.fadeInUp
              )}
              gutterBottom
              color="textPrimary"
            >
              Get in touch with us
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              gutterBottom
              color="textPrimary"
              className={clsx(
                classes.bold,
                classes.animated,
                classes.animatedFade,
                classes.fadeInUp
              )}
            >
              {
                "Fill up the form and our Team will get back to you within 24 hours"
              }
            </Typography>
            <ContactInfo />
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className={classes.contentContainer}
          >
            <ContactUsForm />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
