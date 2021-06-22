import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../../Hooks/useOnScreen";
import { AnimationClasses } from "../Utils/AnimationClasses";
// import { getStatistics } from "../../Services/Landing Page API/LandingPageService";
import Exams from "../../Assets/Home/Data that matters/Tests attempted.svg";
import Questions from "../../Assets/Home/Data that matters/Questions answered.svg";
import Students from "../../Assets/Home/Data that matters/Students Registered.svg";
import BaseImage from "../../Assets/Home/Data that matters/BaseImage.svg";
import CountUp from "react-countup";

const useStyles = makeStyles((theme) => ({
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  logo: {
    width: 100,
  },
  imgContainer: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  ...AnimationClasses,
}));
export default function NumberCounts(props) {
  const classes = useStyles();
  const counterRef = useRef();
  const isVisible = useOnScreen(counterRef);
  const [statData, setStatData] = React.useState([
    {
      logo: <img src={Questions} width="15%" alt="" />,
      value: "7000",
      label: "Questions Attempted",
      name: "questionCount",
      align: "center",
    },
    {
      logo: <img src={Exams} width="15%" alt=""  />,
      value: "5000",
      label: "Tests Attempted",
      name: "testCount",
      align: "flex-start",
    },
    {
      logo: <img src={Students} width="15%" alt="" />,
      value: "10000",
      label: "Students Registered",
      name: "userCount",
      align: "center",
    },
  ]);

  //---------------------------------------TODO---------------------------------
  // useEffect(() => {
  //   getStatistics()
  //     .then((response) => {
  //       const { results } = response.data;
  //       setStatData({
  //         ...statData,
  //         questionCount: {
  //           ...statData.questionCount,
  //           value: results.Total_countQuestion,
  //         },
  //         testCount: { ...statData.testCount, value: results.Total_countTest },
  //         userCount: { ...statData.userCount, value: results.Total_countUser },
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        ref={counterRef}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
          width="70%"
          pl={4}
        >
          {statData.map((data,i) => {
            return (
              <Box
                key={i}
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent={data.align}
                p={3}
                pl={"35%"}
              >
                {data.logo}
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  {isVisible && (
                    <Box display="flex">
                      <CountUp start={0} end={Number(data.value)} delay={0}>
                        {({ countUpRef }) => (
                          <Typography
                            variant="h3"
                            style={{ color: "white" }}
                            ref={countUpRef}
                          />
                        )}
                      </CountUp>
                      &nbsp;
                      <Typography variant="h3" color="secondary">
                        +
                      </Typography>
                    </Box>
                  )}

                  <Typography variant="body1" style={{ color: "white" }}>
                    {data.label}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box width="50%" className={classes.imgContainer}>
          <img src={BaseImage} width="100%" alt=""/>
        </Box>
      </Box>
    </>
  );
}
