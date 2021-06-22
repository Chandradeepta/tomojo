import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { AnimationClasses } from "../../Components/Utils/AnimationClasses";
import clsx from "clsx";
import ContactUsForm from "../../Components/Landing page/ContactUsForm";
import ContactInfo from "../../Components/Landing page/ContactInfo";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: "100%",
    paddingTop: '2%',
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
          <Box
            className={clsx(
              classes.animated,
              classes.animatedFade,
              classes.fadeInLeft
            )}
          >
            <ContactInfo />
          </Box>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          className={clsx(
            classes.contentContainer,
            classes.animated,
            classes.animatedFade,
            classes.fadeInDown
          )}
        >
          <ContactUsForm />
        </Grid>
      </Grid>
    </>
  );
}
