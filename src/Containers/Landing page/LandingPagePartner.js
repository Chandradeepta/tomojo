import {
  Box,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import CustomButton from "../../Components/Common/CustomButton";
import { AnimationClasses } from "../../Components/Utils/AnimationClasses";
import clsx from "clsx";
import CollaborateSVG from "../../Assets/Collaborate.svg";
import { useEffect, useState } from "react";
import { getAboutUs } from "../../Services/Landing Page API/LandingPageService";

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
  svg: {
    width: "75%",
  },
  ...AnimationClasses,
}));

export default function LandingPagePartner(props) {
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
            Want to be a Partner ?
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
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`}
          </Typography>
          <Box pt={3} display="flex">
            <TextField variant="outlined" size="small" label="Your Email" /> &nbsp;
            <CustomButton size="small" color="primary">
              Send Interest
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
            src={CollaborateSVG}
            alt="image1"
            className={clsx(
              classes.svg,
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
