import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import AnswerList from "./AnswerList";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  questionSpace: {
    width: "100%",
  },
  answerSpace: {
    width: "100%",
  },
  solutionSpace: {
    width: "100%",
    border: `2px solid ${theme.palette.primary.light}`,
    borderRadius: 15,
    background: grey[200]
  },
}));
export default function QnASection(props) {
  const classes = useStyles();
  const { readonly } = props;
  return (
    <>
      <Box className={classes.questionSpace}>
        <Typography variant="h6" color="textSecondary">
          {`Question ${props.number}`}
        </Typography>
        <Typography variant="subtitle1" color="textPrimary" align="justify">
          The FM transmission of music is of very good quality in comparison to
          AM transmission. Consider the following statements with this
          reference: The AM signals are more susceptible to noise The FM
          receiver locks itself to catch stronger signal only The wavelength of
          AM waves is much higher in comparison to the FM waves Which among the
          above is / are correct statements?
        </Typography>
      </Box>
      <Box className={classes.answerSpace} pt={2}>
        <AnswerList answers={demoAnswers} readonly={readonly} />
      </Box>
      {readonly && (
        <Box className={classes.solutionSpace} pt={2} p={2}>
          <Typography variant="h6" color="secondary">
            Solution
          </Typography>
          <Typography variant="subtitle1" color="textPrimary" align="justify">
            The FM transmission of music is of very good quality in comparison
            to AM transmission. Consider the following statements with this
            reference
          </Typography>
        </Box>
      )}
    </>
  );
}

const demoAnswers = ["Only 1", "Only 2", "Both 1 and 2", "Neither 1 nor 2"];
