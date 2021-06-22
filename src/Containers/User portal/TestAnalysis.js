import {
  Grid,
  Box,
  Typography,
  makeStyles,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React from "react";
// import { Folder } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  analysisSection: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  analysisList: {
    display: "flex",
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

export default function TestAnalysis(props) {
  const classes = useStyles();
  return (
    <>
      <Grid container style={{ paddingLeft: "4%", paddingRight: "4%" }}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Box width="100%">
            <Typography
              variant="h3"
              color="textPrimary"
              className={classes.bold}
              gutterBottom
            >
              Test Analysis
            </Typography>
          </Box>
          <Paper className={classes.analysisSection}>
            <List dense className={classes.analysisList}>
              {analysisObject.map((each) => {
                return (
                  <ListItem style={{ flex: 1, width: "100%" }}>
                    <ListItemIcon>{each.icon}</ListItemIcon>
                    <ListItemText primary={each.value} secondary={each.label} />
                  </ListItem>
                );
              })}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

const analysisObject = [
  {
    value: "238439 / 272735",
    label: "Rank",
    icon: (
      <i className="material-icons" style={{ color: "#1759D8" }}>
        military_tech
      </i>
    ),
  },
  {
    value: "-0.66 / 100",
    label: "Score",
    icon: (
      <i className="material-icons" style={{ color: "#1759D8" }}>
        emoji_events
      </i>
    ),
  },
  {
    value: "2 / 100",
    label: "Attempted",
    icon: (
      <i className="material-icons" style={{ color: "#1759D8" }}>
        fact_check
      </i>
    ),
  },
  {
    value: "0%",
    label: "Accuracy",
    icon: (
      <i className="material-icons" style={{ color: "#1759D8" }}>
        track_changes
      </i>
    ),
  },
];
