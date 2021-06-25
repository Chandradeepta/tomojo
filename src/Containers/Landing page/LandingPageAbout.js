import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import CustomButton from "../../Components/Common/CustomButton";
import { AnimationClasses } from "../../Components/Utils/AnimationClasses";
import clsx from "clsx";
import AboutUsSVG from "../../Assets/About_us.svg";
// import AboutUsSVG from "../../Assets/Nerd-amico.svg";

import { useEffect, useState } from "react";
import { getAboutUs } from "../../Services/Landing Page API/LandingPageService";
import OfferedServices from "../../Components/Landing page/OfferedServices";
import { useDispatch } from "react-redux";
import { commonTypes } from "../../Redux/types/commonTypes";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: "3%",
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
  ...AnimationClasses,
}));

export default function LandingPageAbout(props) {
  const classes = useStyles();
  const [aboutUs, setAboutUs] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    getAboutUs()
      .then((response) => {
        setAboutUs(response.data.results.Content);
      })
      .catch((error) => {
        dispatch({
          type: commonTypes.SHOW_NOTIFICATION_ASYNC,
          message: "Network Error",
          snackType: "error",
        });
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
            dangerouslySetInnerHTML={{ __html: aboutUs }}
            className={clsx(
              classes.animated,
              classes.animatedFade,
              classes.fadeInLeft
            )}
          ></Typography>
          <Box pt={1}>
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
