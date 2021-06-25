import { Box, Grid, makeStyles, Typography, useTheme } from "@material-ui/core";
import BlogCard from "../../Components/Landing page/BlogCard";
import { AnimationClasses } from "../../Components/Utils/AnimationClasses";
import clsx from "clsx";
import { commonTypes } from "../../Redux/types/commonTypes";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getBlogs } from "../../Services/Landing Page API/LandingPageService";

const useStyles = makeStyles((theme) => ({
  blogContainer:{
    paddingTop: '3%'
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  ...AnimationClasses,
}));
export default function LandingPageBlogs(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs()
      .then((response) => {
        setBlogs(response.data.results);
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
      <Grid container item lg={12} md={12} sm={12} xs={12} className={classes.blogContainer}>
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
        {blogs.map((blog, i) => {
          return (
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              key={i}
              className={clsx(
                classes.bold,
                classes.animated,
                classes.animatedFade,
                classes.fadeInLeft
              )}
            >
              <Box p={6}>
                <BlogCard key={i} blog={blog} />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
