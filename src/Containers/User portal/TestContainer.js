import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { School } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
export default function TestContainer(props) {
  const classes = useStyle();

  return (
    <>
      <Grid container style={{ paddingLeft: "4%",paddingRight: '4%' }}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h4" color="textPrimary" className={classes.bold}>
            Test Information
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <div>
            <List>
              {[1, 2, 3, 4, 5].map((val) => {
                return (
                  <ListItem button>
                    <ListItemIcon>
                      <School color="secondary"/>
                    </ListItemIcon>
                    <ListItemText
                      primary={`Test ${val}`}
                      secondary={"Secondary text"}
                    />
                  </ListItem>
                );
              })}
            </List>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
