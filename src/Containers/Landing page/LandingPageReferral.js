import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import CustomButton from "../../Components/Common/CustomButton";
import { AnimationClasses } from "../../Components/Utils/AnimationClasses";
import clsx from "clsx";
import ReferSVG from "../../Assets/Home/Refer/Refer and Earn page.svg";
import { Skeleton } from "@material-ui/lab";
import { useState, Suspense, lazy } from "react";


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
  download: {
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  svg: {
    width: "75%",
  },
  ...AnimationClasses,
}));

export default function LandingPageReferral(props) {
  const classes = useStyles();
  const [aboutUs, setAboutUs] = useState("");

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
            Refer and Earn
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
            {`Now refer Tomojo to your friends to have access to best quality questions and you both get rewarded with 100 credits (equivalent to Rs.100) to your account. The reward points can be redeemed on any product or services you purchase at www.tomojo.in with no minimum order value!`}
          </Typography>
          <Box pt={3}>
            <CustomButton size="large" color="primary">
              Get started
            </CustomButton>
          </Box>
        </Grid>
        <Suspense
          fallback={
            <>
              <Skeleton variant="rect" width={"100vw"} height={"20vh"} />
            </>
          }
        >
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className={classes.contentContainer}
          >
            <img src={ReferSVG} alt="image1" className={clsx(classes.svg)} />
          </Grid>
        </Suspense>
      </Grid>
    </>
  );
}
