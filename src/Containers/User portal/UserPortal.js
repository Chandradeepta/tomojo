import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Container,
  Grid,
  Toolbar,
  Box,
  Fab,
  useScrollTrigger,
  Zoom,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { KeyboardArrowUp } from "@material-ui/icons";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useRef } from "react";
import UserHeader from "../../Components/User portal/UserHeader";
import Dashboard from "./Dashboard";
import ExamCard from "../../Components/User portal/ExamCard";
import AutoSwipe from "../../Components/Common/AutoSwipe";
import MyPackages from "./MyPackages";
import { Examscreen } from "./ExamScreen";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  landingPageRoot: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "baseline",
    // background: "#F5F5F5",
  },
  list: {
    width: 250,
  },
  logoSpace: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(7),
  },
  content: {
    paddingTop: theme.spacing(3),
    flexGrow: 1,
    width: "100%",
  },
}));

export default function UserPortal(props) {
  const location = useLocation();
  const classes = useStyles();
  let { path } = useRouteMatch();

  useEffect(() => {
    const anchor = document.querySelector("#back-to-top-anchor");
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [location]);

  // const shouldShowHeader = () => {
  //   return !window.location.pathname.includes("/exam-portal");
  // };

  return (
    <>
      <Container
        className={classes.landingPageRoot}
        style={{ display: "flex" }}
      >
        <Grid container style={{ display: "flex" }}>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            {<UserHeader />}
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <main className={classes.content}>
              <Toolbar id="back-to-top-anchor" />
              <Switch>
                <Route exact path={`${path}/dashboard`}>
                  <Dashboard />
                </Route>
                <Route exact path={`${path}/packages`}>
                  <MyPackages />
                </Route>
                <Route exact path={`${path}/exam-portal`}>
                  <Examscreen />
                </Route>
              </Switch>
            </main>
          </Grid>
          <ScrollTop {...props}>
            <Fab color="primary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUp color="textSecondary" />
            </Fab>
          </ScrollTop>
        </Grid>
      </Container>
    </>
  );
}

const scrollTopStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const classes = scrollTopStyles();
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};
