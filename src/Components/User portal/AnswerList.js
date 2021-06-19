import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  Radio,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function AnswerList(props) {
  const classes = useStyles();
  const { answers, readonly } = props;

  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <List dense className={classes.root}>
      {answers.map((value, i) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            button
            onMouseDown={(e) =>
              !readonly ? handleChange(i) : e.preventDefault()
            }
          >
            <ListItemIcon>
              <Radio
                checked={selectedValue == i}
                onChange={() => handleChange(i)}
                value={i}
                name="radio-button-demo"
                inputProps={{ "aria-label": "A" }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`${value}`} />
          </ListItem>
        );
      })}
    </List>
  );
}
