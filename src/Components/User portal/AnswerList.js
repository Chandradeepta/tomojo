import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, Box, Radio } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function AnswerList(props) {
  const classes = useStyles();
  const { answers } = props;

  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  return (
      <List dense className={classes.root}>
        {answers.map((value, i) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem key={value} button onMouseDown={() => handleChange(i)}>
              <ListItemText id={labelId} primary={`${value}`} />
              <ListItemSecondaryAction>
                <Radio
                  checked={selectedValue == i}
                  onChange={() => handleChange(i)}
                  value={i}
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "A" }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
  );
}
