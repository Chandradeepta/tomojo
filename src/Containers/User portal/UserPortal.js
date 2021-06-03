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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  landingPageRoot: {
    width: "100%",
    minHeight: "100vh",
    background: "#F5F5F5",
  },
  initialContainer: {
    padding: "6%",
    paddingBottom: "1%",
    minHeight: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    flexGrow: 1,
    padding: theme.spacing(3),
    width: "100%",
  },
}));

export default function UserPortal(props) {
  const location = useLocation();
  const classes = useStyles();

  useEffect(() => {
    const anchor = document.querySelector("#back-to-top-anchor");
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [location]);

  return (
    <>
      <Container className={classes.landingPageRoot}>
        <Grid container item lg={12} md={12} sm={12} xs={12}>
          <Box display="flex">
            <UserHeader />
            <main className={classes.content}>
              <Toolbar id="back-to-top-anchor" />
              <Switch>
                <Route exact path={`/dashboard`}>
                  {/* <LandingPageHome /> */}
                </Route>
              </Switch>
            </main>
          </Box>
        </Grid>

        <ScrollTop {...props}>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUp color="textSecondary" />
          </Fab>
        </ScrollTop>
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
