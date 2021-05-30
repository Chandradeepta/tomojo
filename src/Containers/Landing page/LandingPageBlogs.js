import { Box, Grid, makeStyles, Typography, useTheme } from "@material-ui/core";
import BlogCard from "../../Components/Landing page/BlogCard";
import { AnimationClasses } from "../../Components/Utils/AnimationClasses";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  bold: {
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
export default function LandingPageBlogs(props) {
  const classes = useStyles();
  return (
    <>
      <Grid container item lg={12} md={12} sm={12} xs={12}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography
            variant="h3"
            color="textPrimary"
            className={clsx(
              classes.bold,
              classes.animated,
              classes.animatedFade,
              classes.fadeInDown
            )}
          >
            Recommeded Blogs for you{" "}
          </Typography>
        </Grid>
        {[0, 1, 2, 3, 4, 5].map((x) => {
          return (
            <Grid item lg={6} md={6} sm={12} xs={12} className={clsx(
                classes.bold,
                classes.animated,
                classes.animatedFade,
                classes.fadeInLeft
              )}>
              <Box p={6}>
                <BlogCard key={x} />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
