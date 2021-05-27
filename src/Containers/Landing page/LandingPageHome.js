import React, { useEffect, useRef } from "react";
import {
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
  Box,
  Container,
  Grow,
  Slide,
  Button,
  Fab,
} from "@material-ui/core";
import clsx from "clsx";
import Navbar from "../../Components/Landing page/Navbar";
import Illustraion1 from "../../Assets/Nerd-amico.svg";
import Illustraion2 from "../../Assets/Studying.svg";

import CustomButton from "../../Components/Landing page/CustomButton";
import OfferedServices from "../../Components/Landing page/OfferedServices";
import TextTransitions from "../../Components/Common/TextTransitions";
import Testimonials from "../../Components/Landing page/Testimonials";
import useOnScreen from "../../Hooks/useOnScreen";
import NumberCounts from "../../Components/Landing page/NumberCounts";
import { AnimationClasses } from "../../Components/Utils/AnimationClasses";
import DownloadButton from "../../Components/Landing page/DownloadButton";

const mainContainerStyles = makeStyles((theme) => ({
  initialContainer: {
    padding: "6%",
    paddingTop: 0,
  },
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
      {/* // Illustration 1 */}
      <Grid container className={classes.initialContainer}>
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
                  ? clsx(
                      classes.animated,
                      classes.animatedFade,
                      classes.fadeInUp
                    )
                  : undefined
              }
            >
              Give your child handpicked questions to practise and ensure
              indepth understanding
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
                Download our app from
              </Typography>
              {DOWNLOAD_LINKS.map((each, i) => {
                return <DownloadButton key={i}>{each}</DownloadButton>;
              })}
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
              className={
                isVisibleSection1
                  ? clsx(
                      classes.illustration1,
                      classes.animated,
                      classes.animatedFade,
                      classes.fadeInLeft
                    )
                  : undefined
              }
            />
          </Grid>
        </Grid>

        {/* // Services */}
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box pt={5}>
              <Typography
                variant="h4"
                className={classes.bold}
                align="center"
                color="secondary"
                gutterBottom
              >
                What we offer
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={classes.services}
          >
            <OfferedServices />
          </Grid>
        </Grid>

        {/* // Illustration 2 */}
        <Grid container>
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
                        classes.illustration1,
                        classes.animated,
                        classes.animatedFade,
                        classes.fadeInLeft
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
        </Grid>

        <Grid container>
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
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={classes.services}
          >
            <NumberCounts />
          </Grid>
        </Grid>

        <Grid container>
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
        </Grid>
      </Grid>
    </>
  );
}

const DOWNLOAD_LINKS = [
  {
    platform: "Play Store",
    logo: <i className="fab fa-google-play fa-2x" />,
  },
  {
    platform: "App Store",
    logo: <i className="fab fa-apple fa-2x" />,
  },
];
