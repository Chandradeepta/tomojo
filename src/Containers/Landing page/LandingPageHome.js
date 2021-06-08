import React, { useEffect, useRef } from "react";
import { Grid, makeStyles, Typography, Box } from "@material-ui/core";
import clsx from "clsx";
import Illustraion1 from "../../Assets/Home/Illustration1_1.gif";
import Illustraion2 from "../../Assets/Home/Illustration2_1.gif";
import GPlay from "../../Assets/gplayImage.png";

import CustomButton from "../../Components/Common/CustomButton";
import OfferedServices from "../../Components/Landing page/OfferedServices";
import TextTransitions from "../../Components/Common/TextTransitions";
import Testimonials from "../../Components/Landing page/Testimonials";
import useOnScreen from "../../Hooks/useOnScreen";
import NumberCounts from "../../Components/Landing page/NumberCounts";
import { AnimationClasses } from "../../Components/Utils/AnimationClasses";
import DownloadButton from "../../Components/Landing page/DownloadButton";

const mainContainerStyles = makeStyles((theme) => ({
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
  textContainer_alt: {
    alignItems: "flex-end",
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
  services: {
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.spacing(4),
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

export default function LandingPageHome(props) {
  const classes = mainContainerStyles();
  const gridRef1 = useRef();
  const gridRef2 = useRef();
  const isVisibleSection1 = useOnScreen(gridRef1);
  const isVisibleSection2 = useOnScreen(gridRef2);

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
        ref={gridRef1}
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
            className={
              isVisibleSection1
                ? clsx(
                    classes.bold,
                    classes.animated,
                    classes.animatedFade,
                    classes.fadeInUp
                  )
                : undefined
            }
            gutterBottom
            color="textPrimary"
          >
            Let your child lead the academics
          </Typography>
          <Typography
            variant="body1"
            align="justify"
            gutterBottom
            color="textPrimary"
            className={
              isVisibleSection1
                ? clsx(classes.animated, classes.animatedFade, classes.fadeInUp)
                : undefined
            }
          >
            Give your child handpicked questions to practise and ensure indepth
            understanding
          </Typography>
          <Box pt={3}>
            <CustomButton size="large" color="primary">
              Get started
            </CustomButton>
          </Box>
          <Box pt={3} width="100%" className={classes.download}>
            <Typography
              variant="h6"
              color="textPrimary"
              gutterBottom
              className={clsx(
                classes.bold,
                classes.animated,
                classes.animatedFade,
                classes.fadeInUp
              )}
            >
              Our app is now available on Google Play.
            </Typography>
            <Box ml={"-12px"}>
              <a
                href="https://play.google.com/store/apps/details?id=com.tomojo.application&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                target="_blank"
              >
                <img src={GPlay} width="200" />
              </a>
            </Box>
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
            src={Illustraion1}
            alt="image1"
            width="100%"
            className={
              isVisibleSection1
                ? clsx(
                    classes.animated,
                    classes.animatedFade,
                    classes.fadeInLeft
                  )
                : undefined
            }
          />
        </Grid>
      </Grid>

      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Box pt={5}>
          <Typography
            variant="h4"
            className={classes.bold}
            align="center"
            color="secondary"
            gutterBottom
          >
            What you can get
          </Typography>
        </Box>
      </Grid>

      <Grid item lg={12} md={12} sm={12} xs={12} className={classes.services}>
        <OfferedServices />
      </Grid>

      <Grid
        container
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className={classes.contentContainer}
        ref={gridRef2}
      >
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          className={classes.contentContainer}
        >
          <img
            src={Illustraion2}
            alt="image2"
            className={
              isVisibleSection2
                ? clsx(
                    // classes.animated,
                    // classes.animatedFade,
                    // classes.fadeInLeft
                  )
                : clsx(classes.fadeOutRight)
            }
            width="90%"
          />
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          className={clsx(classes.textContainer, classes.textContainer_alt)}
        >
          <Box display="flex">
            <Typography
              variant="h3"
              className={classes.bold}
              gutterBottom
              align="right"
              color="textPrimary"
              display="inline"
            >
              Practice &nbsp;
            </Typography>
            <TextTransitions textArray={[" Anywhere.", " Anytime."]} />
          </Box>
          <Typography
            variant="body1"
            align="justify"
            gutterBottom
            align="right"
            color="textPrimary"
            className={
              isVisibleSection2
                ? clsx(
                    classes.animated,
                    classes.animatedFade,
                    classes.fadeInUp,
                    classes.centerAlign
                  )
                : undefined
            }
          >
            Access the best questions right from home
          </Typography>
          <Box pt={3} textAlign="right">
            <CustomButton size="large" color="primary">
              Get started
            </CustomButton>
          </Box>
        </Grid>
      </Grid>

      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Box pt={5}>
          <Typography
            variant="h4"
            className={classes.bold}
            align="center"
            color="secondary"
            gutterBottom
          >
            Data that matters
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} className={classes.services}>
        <NumberCounts />
      </Grid>

      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Box pt={8} pb={4}>
          <Typography
            variant="h4"
            className={classes.bold}
            align="center"
            color="secondary"
            gutterBottom
          >
            Testimonials
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Testimonials />
      </Grid>
    </>
  );
}

