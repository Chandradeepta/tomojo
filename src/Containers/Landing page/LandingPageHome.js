import clsx from "clsx";
import React, { useRef, Suspense, useEffect } from "react";
import { Grid, makeStyles, Typography, Box, useTheme } from "@material-ui/core";
import useOnScreen from "../../Hooks/useOnScreen";
import Skeleton from "@material-ui/lab/Skeleton";
import TextTransitions from "../../Components/Common/TextTransitions";
import { AnimationClasses } from "../../Components/Utils/AnimationClasses";
import GPlay from "../../Assets/gplayImage.png";
import Illustraion1 from "../../Assets/Home/Illustration1_1.svg";
import Illustraion2 from "../../Assets/Home/Illustration2_1.svg";
import CustomButton from "../../Components/Common/CustomButton";
import CardBg1 from "../../Assets/Home/cardBg1.svg";
import CardBg2 from "../../Assets/Home/cardBg2.svg";
import CardBg3 from "../../Assets/Home/cardBg3.svg";

import Rellax from "rellax";

const OfferedServices = React.lazy(() =>
  import("../../Components/Landing page/OfferedServices")
);
const Testimonials = React.lazy(() =>
  import("../../Components/Landing page/Testimonials")
);
const NumberCounts = React.lazy(() =>
  import("../../Components/Landing page/NumberCounts")
);

const mainContainerStyles = makeStyles((theme) => ({
  contentContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    zIndex: 2,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  contentContainer_alt: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  imageContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
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
  download: {
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  section: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      background: theme.palette.primary.dark,
      borderRadius: 45,
    },
  },
  sectionStat: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(4),
    background: theme.palette.primary.dark,
    borderRadius: 45,
  },
  servicesTitle: {
    [theme.breakpoints.up("sm")]: {
      color: theme.palette.background.default,
    },
  },
  ...AnimationClasses,
}));

export default function LandingPageHome(props) {
  const classes = mainContainerStyles();
  const theme = useTheme();
  const gridRef1 = useRef();
  const gridRef2 = useRef();

  const isVisibleSection1 = useOnScreen(gridRef1);
  const isVisibleSection2 = useOnScreen(gridRef2);

  useEffect(() => {
    const rellax = new Rellax(".rellax");
  }, []);

  return (
    <>
      <Suspense
        fallback={
          <>
            <Skeleton variant="rect" width={"100vw"} height={"20vh"} />
            <br />
            <Skeleton variant="rect" width={"100vw"} height={"20vh"} />
            <br />
            <Skeleton variant="rect" width={"100vw"} height={"20vh"} />
            <br />
            <Skeleton variant="rect" width={"100vw"} height={"20vh"} />
            <br />
            <Skeleton variant="rect" width={"100vw"} height={"20vh"} />
            <br />
          </>
        }
      >
        <Grid
          container
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={clsx(classes.contentContainer, "area")}
          ref={gridRef1}
        >
          <ul class="circles">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((each) => (
              <li></li>
            ))}
          </ul>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className={clsx(classes.textContainer)}
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
              variant="h5"
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
                Our app is now available on Google Play.
              </Typography>
              <Box ml={"-12px"}>
                <a
                  href="https://play.google.com/store/apps/details?id=com.tomojo.application&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Box width="100%">
                    <img
                      src={GPlay}
                      alt="google_play"
                      width="200"
                      height="100%"
                    />
                  </Box>
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
            className={clsx(classes.imageContainer, "slowParallax")}
          >
            <img
              src={Illustraion1}
              className="slowParallax"
              width="100%"
              height="100%"
              alt={"Let your child lead the academics"}
              style={{ zIndex: 3 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={clsx(classes.section, "area")}
        >
          <Box pt={3}>
            <Typography
              variant="h4"
              className={clsx(classes.bold, classes.servicesTitle)}
              align="center"
              color="secondary"
              gutterBottom
            >
              What you can get
            </Typography>
          </Box>
          <OfferedServices />
        </Grid>
        <Grid
          container
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={clsx(classes.contentContainer, "area")}
          ref={gridRef2}
        >
          <ul class="circles">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((each) => (
              <li></li>
            ))}
          </ul>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className={clsx(classes.contentContainer_alt)}
          >
            <img
              src={Illustraion2}
              width="100%"
              height="100%"
              alt={"Practice aytime, anywhere"}
            />
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className={clsx(classes.textContainer, classes.textContainer_alt)}
            style={{ background: "transparent" }}
          >
            <Box display="flex">
              <Typography
                variant="h3"
                className={clsx(classes.bold)}
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
              variant="h6"
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
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.section}
          style={{ position: "relative" }}
        >
          {/* Card backgrounds */}
          <Box width="5%" position="absolute" bottom="1%" left="2%" zIndex="1">
            <img src={CardBg1} width="100%" />
          </Box>
          <Box width="12%" position="absolute" top="0%" left="0%" zIndex="1">
            <img src={CardBg2} width="100%" />
          </Box>
          <Box width="20%" position="absolute" right="0%" top="0%" zIndex="1">
            <img src={CardBg3} width="100%" />
          </Box>
          <NumberCounts />
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Box pt={8} pb={4}>
            <Typography
              variant="h3"
              className={classes.bold}
              align="center"
              color="secondary"
              gutterBottom
            >
              Testimonials
            </Typography>
          </Box>
          <Testimonials />
        </Grid>
      </Suspense>
    </>
  );
}
