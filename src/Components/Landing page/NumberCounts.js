import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import questionsLogo from "../../Assets/Knowledge _Isometric.svg";
import studentLogo from "../../Assets/Smiley face_Two Color.svg";
import clsx from "clsx";
import useOnScreen from "../../Hooks/useOnScreen";
import { AnimationClasses } from "../Utils/AnimationClasses";
import { getStatistics } from "../../Services/Landing Page API/LandingPageService";

const useStyles = makeStyles((theme) => ({
  Paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(2),
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    textAlign: "justify",
    maxWidth: 200,
    transition: "all 0.3s ease-in-out",
    boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
    "&:hover": {
      boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
      transform: "scale(1.04)",
    },
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  logo:{
    width: 100
  },
  ...AnimationClasses,
}));
export default function NumberCounts(props) {
  const classes = useStyles();
  const counterRef = useRef();
  const isVisible = useOnScreen(counterRef);
  const [statData, setStatData] = React.useState({
    questionCount: {
      logo: <img src={questionsLogo} width="100%" height="100%"/>,
      value: "",
      label: "Questions Attempted",
    },
    testCount: {
      logo: <img src={studentLogo} width="100%" height="100%"/>,
      value: "",
      label: "Tests Attempted",
    },
    userCount: {
      logo: <img src={studentLogo} width="100%" height="100%"/>,
      value: "",
      label: "Students Registered",
    },
  });

  useEffect(() => {
    getStatistics().then((response) => {
      const { results } = response.data;
      setStatData({
        ...statData,
        questionCount: {
          ...statData.questionCount,
          value: results.Total_countQuestion,
        },
        testCount: { ...statData.testCount, value: results.Total_countTest },
        userCount: { ...statData.userCount, value: results.Total_countUser },
      });
    }).catch(err=>{
      console.log(err)
    });
  }, []);

  return (
    <>
      <Box
        width="100%"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        ref={counterRef}
        className={
          isVisible
            ? clsx(classes.animated, classes.animatedFade, classes.fadeInLeft)
            : clsx(classes.fadeOutLeft)
        }
      >
        {Object.values(statData).map((data, index) => {
          return <CounterCard countData={data} key={index} classes={classes} />;
        })}
      </Box>
    </>
  );
}

const CounterCard = (props) => {
  const { classes } = props;
  const { countData } = props;

  return (
    <Paper elevation={0} className={classes.Paper}>
      <Box display="flex" justifyContent="center" p={1} pb={2} className={classes.logo}>
        {countData.logo}
      </Box>
      <Typography
        variant="h4"
        align="center"
        className={classes.bold}
        gutterBottom
        color="textPrimary"
      >
        {`${countData.value}+`}
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="secondary"
        className={classes.bold}
      >
        {countData.label}
      </Typography>
    </Paper>
  );
};
