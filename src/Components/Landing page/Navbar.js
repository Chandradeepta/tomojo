import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Box, Button, Grid } from "@material-ui/core";
import RoundedButton from "./CustomButton";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: theme.palette.common.white,
    color: theme.palette.secondary.main,
    width: "100%",
    paddingLeft: `${theme.spacing(1) - 2}%`,
    paddingRight: `${theme.spacing(1) - 2}%`,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1%",
      paddingRight: "1%",
    },
  },
  hamburgerButton: {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  nav: {
    margin: theme.spacing(2),
    cursor: "pointer",
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  brandSpace: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: theme.spacing(0.5),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.05rem",
    },
  },
}));

export default function Navbar(props) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          className={classes.hamburgerButton}
          color="inherit"
          aria-label="menu"
          onClick={props.toggleDrawer(true)}
        >
          <i className="fas fa-bars"></i>
        </IconButton>
        <Box className={classes.brandSpace}>
          <IconButton edge="start" color="inherit" aria-label="logo">
            <i className="fas fa-book-open" style={{ color: "#1F75FE" }}></i>
          </IconButton>
          <Typography variant="h5" display="inline" className={classes.title}>
            Tomojo
          </Typography>
        </Box>
        <Box flex="2">
          {props.links.map((each, i) => {
            return (
              <Link to={each.link} key={i}>
                <Typography
                  key={i}
                  variant="caption"
                  className={classes.nav}
                  color="textPrimary"
                >
                  {each.name}
                </Typography>
              </Link>
            );
          })}
        </Box>
        <RoundedButton color="primary">Login</RoundedButton>
      </Toolbar>
    </AppBar>
  );
}
