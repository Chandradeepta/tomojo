import React from "react";
import cx from "clsx";
import {
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Box,
  ThemeProvider,
} from "@material-ui/core";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import CustomButton from "../Common/CustomButton";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(({ breakpoints, spacing, typography }) => ({
  root: {
    margin: "auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    maxWidth: 500,
    marginLeft: "auto",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    [breakpoints.up("lg")]: {
      flexDirection: "row",
      paddingTop: spacing(2),
    },
  },
  media: {
    width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: "48%",
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    position: "relative",
    [breakpoints.up("lg")]: {
      width: "100%",
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: "translateX(-8px)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
  bold:{
    fontWeight: typography.fontWeightBold
  }
}));

export const BlogCard = React.memo(function BlogCard(props) {
  const styles = useStyles();
  const { blog } = props;
  blog.blogContent = String(blog.blogContent).slice(0, 100) + "...";
  const { button: buttonStyles, ...contentStyles } =
    useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={styles.media}
        image={
          "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip"
        }
      />
      <CardContent>
        <TextInfoContent
          classes={contentStyles}
          overline={
            // <Box display="flex" justifyContent="space-between" width="100%">
            //   <Box pr={2}>{blog.postDate}</Box>
            //   <Box>{`${blog.blogReadTime} read`}</Box>
            // </Box>
            blog.postDate
          }
          heading={
            <Typography variant="subtitle1" className={styles.bold}>{blog.blogHeading}</Typography>
          }
          body={<div dangerouslySetInnerHTML={{ __html: blog.blogContent }} />}
        />
        <CustomButton color="secondary">Read more</CustomButton>
      </CardContent>
    </Card>
  );
});

export default BlogCard;
