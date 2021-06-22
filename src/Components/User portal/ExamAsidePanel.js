import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import CustomButton from "../Common/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { ExamScreenTypes } from "../../Redux/Types/examScreenTypes";

export function ExamAsidePanel(props) {
  const dispatch = useDispatch();
  const { currentQuestion } = useSelector((state) => state.examScreenState);

  const [tests, setTests] = useState([]);
  useState(() => {
    let arr = [];
    for (let i = 1; i <= 48; i++) {
      arr.push(i);
    }
    setTests(arr);
  }, []);
  return (
    <>
      <Box
        width="100%"
        display="flex"
        flexWrap="wrap"
        justifyContent="flex-start"
        height="100%"
      >
        <Box width="100%">
          <List dense={true}>
            {AnswerStat.map((each) => {
              return (
                <ListItem button>
                  <ListItemText primary={each.name} />
                  <ListItemSecondaryAction>
                    <ListItemText primary={each.value} />
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box
          width="100%"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
        >
          {tests.map((each) => {
            return (
              <Box
                width="10px"
                height="10px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={1}
                m={0.5}
                onClick={() =>
                  dispatch({
                    type: ExamScreenTypes.SET_CURRENT_QUESTION,
                    questionNumber: each,
                  })
                }
                style={{
                  border: "1px solid #17E532",
                  cursor: "pointer",
                  background: currentQuestion === each && "#17E532",
                }}
              >
                <Typography color="primary" variant="caption">
                  {each}
                </Typography>
              </Box>
            );
          })}
        </Box>

        <Box
          width="100%"
          p={2}
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <CustomButton size="small" color="secondary">
            Instructions
          </CustomButton>
          <CustomButton size="small" color="primary">
            Finish test
          </CustomButton>
        </Box>
      </Box>
    </>
  );
}

const AnswerStat = [
  {
    name: "Answered",
    value: 3,
  },
  {
    name: "Not Answered",
    value: 30,
  },
  {
    name: "Marked for review",
    value: 3,
  },
  {
    name: "Marked and answered",
    value: 3,
  },
];
