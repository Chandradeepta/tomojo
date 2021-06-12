import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import AnswerList from "./AnswerList";

const useStyles = makeStyles((theme) => ({
  questionSpace: {
    width: "80%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  answerSpace: {
    width: "60%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));
export default function QnASection(props) {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.questionSpace}>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Question 1
        </Typography>
        <Typography variant="subtitle1" color="textPrimary" align="justify">
          With reference to the mobile telephony, the USSD technology is
          increasingly being adopted in recent times for various services. How
          the USSD is different from SMS ?
        </Typography>
      </Box>
      <Box className={classes.answerSpace} pt={2}>
        <AnswerList answers={demoAnswers} />
      </Box>
    </>
  );
}

const demoAnswers = ["Only 1", "Only 2", "Both 1 and 2", "Neither 1 nor 2"];

