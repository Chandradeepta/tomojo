import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import LoginGif from "../Assets/Login.gif";
import { GoogleSignInButton } from "../Components/Utils/GoogleSignInButton";
import CustomButton from "../Components/Common/CustomButton";
import clsx from "clsx";
import { AnimationClasses } from "../Components/Utils/AnimationClasses";
import { PhoneAuthentication } from "../Components/User portal/Login/PhoneAuthentication";
import { EmailAuthentication } from "../Components/User portal/Login/EmailAuthentication";

import { useState } from "react";
import { CommonClasses } from "../Components/Utils/CommonClasses";
import SignUp from "../Components/User portal/Login/SignUp";
import SignIn from "../Components/User portal/Login/SignIn";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
  },
  brand: {
    letterSpacing: theme.spacing(1),
    fontWeight: theme.typography.fontWeightBold,
  },
  handCursor: {
    cursor: "pointer",
    color: theme.palette.secondary.main,
  },

  ...AnimationClasses,
}));
export default function Login(props) {
  const classes = useStyles();

  const [isSignedUpByPhone, setIsSignedUpByPhone] = useState(false);
  const [UserAction, setUserAction] = useState({
    signUp: false,
    signIn: false,
  });

  return (
    <>
      <Grid container className={classes.contentContainer}>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Box width="100%">
            <img
              src={LoginGif}
              alt="image1"
              width="80%"
              className={clsx(
                classes.illustration1,
                classes.animated,
                classes.animatedFade,
                classes.fadeInLeft
              )}
            />
          </Box>
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
            pt={3}
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
              p={3}
            >
              {!(UserAction.signUp || UserAction.signIn) && (
                <>
                  <CustomButton
                    color="primary"
                    size="large"
                    onClick={() =>
                      setUserAction({ signUp: true, signIn: false })
                    }
                  >
                    Sign Up
                  </CustomButton>
                  <CustomButton
                    color="primary"
                    size="large"
                    onClick={() =>
                      setUserAction({ signUp: false, signIn: true })
                    }
                  >
                    Sign In
                  </CustomButton>
                </>
              )}
              {UserAction.signUp && <SignUp />}
              {UserAction.signIn && <SignIn />}
            </Box>
            <Box>
              {UserAction.signUp && (
                <Typography variant="body2">
                  Already have an account?{" "}
                  <span
                    className={classes.handCursor}
                    onClick={() =>
                      setUserAction({ signUp: false, signIn: true })
                    }
                  >
                    Sign in
                  </span>
                </Typography>
              )}
              {UserAction.signIn && (
                <Typography variant="body2">
                  Don't have an account ?{" "}
                  <span
                    className={classes.handCursor}
                    onClick={() => {
                      setIsSignedUpByPhone(false);
                      setUserAction({ signUp: true, signIn: false });
                    }}
                  >
                    Sign up
                  </span>
                </Typography>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
