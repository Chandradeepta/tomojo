import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import questionsLogo from "../../Assets/Knowledge _Isometric.svg";
import studentLogo from "../../Assets/Smiley face_Two Color.svg";
import clsx from "clsx";
import useOnScreen from "../../Hooks/useOnScreen";
import { AnimationClasses } from "../Utils/AnimationClasses";
import { getStatistics } from "../../Services/Landing Page API/LandingPageService";
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
  ...AnimationClasses,
}));
export default function NumberCounts(props) {
  const classes = useStyles();
  const counterRef = useRef();
  const isVisible = useOnScreen(counterRef);
  const [statData, setStatData] = React.useState([
    {
      logo: <img src={Questions} width="15%" />,
      value: "7000",
      label: "Questions Attempted",
      name: "questionCount",
      align: "center",
    },
    {
      logo: <img src={Exams} width="15%" style={{zIndex: 4}}/>,
      value: "5000",
      label: "Tests Attempted",
      name: "testCount",
      align: "flex-start",
    },
    {
      logo: <img src={Students} width="15%" />,
      value: "10000",
      label: "Students Registered",
      name: "userCount",
      align: "center",
    },
  ]);

  const counter = (limit) => {
    for (let i = 0; i < limit; i++) {
      return i;
    }
  };

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
          {statData.map((data) => {
            return (
              <Box
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent={data.align}
                p={3}
                pl={'35%'}
              >
                {data.logo}
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  {isVisible && (
                    <Box display="flex">
                      <CountUp start={0} end={data.value} delay={0}>
                        {({ countUpRef }) => (
                          <Typography
                            variant="h3"
                            style={{ color: "white" }}
                            ref={countUpRef}
                          />
                        )}
                      </CountUp>&nbsp;
                      <Typography variant="h3" color="secondary">+</Typography>
                    </Box>
                  )}

                  <Typography variant="body1" style={{ color: "white" }}>
                    {data.label}
                  </Typography>
                </Box>
              </Box>
            );
          })}
          {/* <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={3}
          >
            <img src={Students} width="15%" />
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography variant="h4" style={{ color: "white" }}>
                6000+
              </Typography>
              <Typography variant="body1" style={{ color: "white" }}>
                Students Registered
              </Typography>
            </Box>
          </Box>
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            p={3}
          >
            <img src={Questions} width="15%" />
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography variant="h4" style={{ color: "white" }}>
                10000+
              </Typography>
              <Typography variant="body1" style={{ color: "white" }}>
                Questions Attempted
              </Typography>
            </Box>
          </Box>
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={3}
          >
            <img src={Exams} width="15%" />
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography variant="h4" style={{ color: "white" }}>
                7000+
              </Typography>
              <Typography variant="body1" style={{ color: "white" }}>
                Tests Attempted
              </Typography>
            </Box>
          </Box> */}
        </Box>
        <Box width="50%">
          <img src={BaseImage} width="100%" />
        </Box>
      </Box>
    </>
  );
}
