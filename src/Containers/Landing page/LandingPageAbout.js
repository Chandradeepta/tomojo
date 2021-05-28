import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import CustomButton from "../../Components/Landing page/CustomButton";
import { AnimationClasses } from "../../Components/Utils/AnimationClasses";
import clsx from "clsx";
import AboutUsSVG from "../../Assets/About_us.svg";
// import AboutUsSVG from "../../Assets/Nerd-amico.svg";

import { useEffect, useState } from "react";
import { getAboutUs } from "../../Services/Landing Page API/LandingPageService";
import OfferedServices from "../../Components/Landing page/OfferedServices";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
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

export default function LandingPageAbout(props) {
  const classes = useStyles();
  const [aboutUs, setAboutUs] = useState("");

  useEffect(() => {
    getAboutUs().then((response) => {
      console.log(response);
      setAboutUs(response.data.results.Content);
    });
  }, []);

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
            About us
          </Typography>
          <Typography
            variant="body1"
            align="justify"
            gutterBottom
            color="textPrimary"
            className={clsx(
              classes.animated,
              classes.animatedFade,
              classes.fadeInLeft
            )}
          >
            {aboutUs }
          </Typography>
          <Box pt={3}>
            <CustomButton size="large" color="primary">
              Get started
            </CustomButton>
          </Box>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          className={classes.contentContainer}
        >
          <img
            src={AboutUsSVG}
            alt="image1"
            className={clsx(
              classes.illustration1,
              classes.animated,
              classes.animatedFade,
              classes.fadeInLeft
            )}
          />
        </Grid>
      </Grid>
    </>
  );
}
