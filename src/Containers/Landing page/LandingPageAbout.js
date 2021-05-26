import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import CustomButton from "../../Components/Landing page/CustomButton";
import { AnimationClasses } from "../../Components/Utils/AnimationClasses";
import clsx from "clsx";
import AboutUsSVG from "../../Assets/About_us.svg";

const useStyles = makeStyles((theme) => ({
  initialContainer: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "10%",
    },
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
  return (
    <>
      <Grid container className={classes.initialContainer}>
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
                classes.fadeInUp
              )}
            >
              We are the marketplace for those professionals, teachers,
              scholars, parents and many more who want to share their valuable
              knowledge to the masses. We provide students a platform where they
              have access to millions of opportunities in terms of learning and
              exploring new ways of learning and understanding their curriculum
              through e-learning. We provide the biggest platform for conducting
              various online examinations based assessments tools followed by
              effective analyses to gauge the performance and scope of
              improvement of students. Now it is possible for a parent to
              conduct an assessment for his/her children to add more values and
              understanding to their curriculum through online assessments. It
              is possible for a teacher to create online assessment tests for
              his students to impart maximum possible understanding, it is
              possible for scholars to spread their knowledge and understanding
              to the masses.
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
      </Grid>
    </>
  );
}
