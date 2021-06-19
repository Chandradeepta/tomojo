import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import {
  makeStyles,
  Container,
  Grid,
  Toolbar,
  Fab,
  useScrollTrigger,
  Zoom,
  Drawer,
  Box,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { KeyboardArrowUp } from "@material-ui/icons";
import clsx from "clsx";
import React, { useEffect, useRef } from "react";
import UserHeader from "../../Components/User portal/UserHeader";
import Dashboard from "./Dashboard";
import MyPackages from "./MyPackages";
import ExamScreen from "./ExamScreen";
import TestContainer from "./TestContainer";
import { ExamAsidePanel } from "../../Components/User portal/ExamAsidePanel";
import Solutions from "./Solutions";
import TestAnalysis from "./TestAnalysis";

const drawerWidth = 350;

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
    // flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  drawerRight: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaperRight: {
    width: drawerWidth,
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
    },
  },
}));

export default function UserPortal(props) {
  const location = useLocation();
  const classes = useStyles();
  let { path } = useRouteMatch();
  const [openRightDrawer, setOpenRightDrawer] = React.useState(true);

  useEffect(() => {
    const anchor = document.querySelector("#back-to-top-anchor");
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [location]);

  return (
    <>
      <Container
        className={classes.landingPageRoot}
        style={{ display: "flex" }}
      >
        <Grid container style={{ display: "flex" }}>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            {
              <UserHeader
                openRightDrawer={openRightDrawer}
                setOpenRightDrawer={setOpenRightDrawer}
              />
            }
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <main
              className={clsx(classes.content, {
                [classes.contentShift]:
                  location.pathname.includes("/exam-portal") && openRightDrawer,
              })}
            >
              <Toolbar id="back-to-top-anchor" />
              <Switch>
                <Route exact path={`${path}/dashboard`}>
                  <Dashboard />
                </Route>
                <Route exact path={`${path}/packages`}>
                  <MyPackages />
                </Route>
                <Route exact path={`${path}/exam-portal`}>
                  <ExamScreen />
                </Route>
                <Route exact path={`${path}/tests`}>
                  <TestContainer />
                </Route>
                <Route exact path={`${path}/analysis`}>
                  <TestAnalysis />
                </Route>
                <Route exact path={`${path}/solutions`}>
                  <Solutions />
                </Route>
              </Switch>
            </main>
          </Grid>
          <ScrollTop {...props}>
            <Fab size="small" aria-label="scroll back to top">
              <KeyboardArrowUp color="secondary" />
            </Fab>
          </ScrollTop>
          {location.pathname.includes("/exam-portal") && (
            <Drawer
              className={classes.drawerRight}
              variant="persistent"
              anchor="right"
              open={openRightDrawer}
              classes={{
                paper: classes.drawerPaperRight,
              }}
            >
              <Toolbar />
              <Box height="30px" />
              <ExamAsidePanel />
            </Drawer>
          )}
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
