import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import LoginGif from "../Assets/Login.gif";
import { GoogleSignInButton } from "../Components/Utils/GoogleSignInButton";
import CustomButton from "../Components/Common/CustomButton";
import clsx from "clsx";
import { AnimationClasses } from "../Components/Utils/AnimationClasses";
import { SignupFields } from "../Components/User portal/Login/SignUpFields";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  brand: {
    letterSpacing: theme.spacing(1),
    fontWeight: theme.typography.fontWeightBold,
  },
  animated: {
    animationDuration: "1s",
    animationFillMode: "both",
  },
  animatedFade: {
    opacity: 0,
  },
  ...AnimationClasses,
}));
export default function Login(props) {
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
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <img
            src={LoginGif}
            alt="image1"
            className={clsx(
              classes.illustration1,
              classes.animated,
              classes.animatedFade,
              classes.fadeInLeft
            )}
          />
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          className={classes.textContainer}
        >
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            className={clsx(
              classes.animated,
              classes.animatedFade,
              classes.fadeInDown
            )}
          >
            <Typography
              variant="h5"
              color="secondary"
              className={classes.brand}
            >
              WELCOME TO
            </Typography>
            <Typography variant="h2" className={classes.brand} color="primary">
              TOMOJO
            </Typography>
            <Box
              display="flex"
              justifyContent="space-evenly"
              width="100%"
              p={5}
            >
              {/* <CustomButton color="primary" size="large">
                Sign Up
              </CustomButton>
              <CustomButton color="primary" size="large">
                Sign In
              </CustomButton> */}
              <SignupFields />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
