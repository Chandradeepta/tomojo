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
import LandingPageAbout from "./LandingPageAbout";
import LandingPageHome from "./LandingPageHome";
import React, { useEffect, useRef } from "react";
import Navbar from "../../Components/Landing page/Navbar";
import LandingPageContact from "./LandingPageContact";
import LandingPageReferral from "./LandingPageReferral";
import LandingPagePartner from "./LandingPagePartner";
import { Footer } from "../../Components/Common/Footer";

const useStyles = makeStyles((theme) => ({
  landingPageRoot: {
    width: "100%",
    minHeight: "100vh",
    // background: theme.palette.background.default,
  },
  initialContainer: {
    padding: "6%",
    paddingBottom: "1%",
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
}));

export default function LandingPage(props) {
  const location = useLocation();
  const classes = useStyles();
  const scrollUpIconRef = useRef();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const anchor = document.querySelector("#back-to-top-anchor");
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [location]);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem className={classes.logoSpace}></ListItem>
        {links.map((link, index) => (
          <ListItem button key={link}>
            <ListItemText
              primary={link.name}
              primaryTypographyProps={{ variant: "h5" }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <Router>
        <Container maxWidth="lg" className={classes.landingPageRoot}>
          <Navbar toggleDrawer={toggleDrawer} links={links} />
          <Toolbar id="back-to-top-anchor" />
          <Drawer
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          </Drawer>

          <Grid container className={classes.initialContainer}>
            <Switch>
              <Route exact path={`/home`}>
                <LandingPageHome />
              </Route>
              <Route exact path={`/about`}>
                <LandingPageAbout />
              </Route>
              <Route exact path={`/contact`}>
                <LandingPageContact />
              </Route>
              <Route exact path={`/refer`}>
                <LandingPageReferral />
              </Route>
              <Route exact path={`/partner-with-us`}>
                <LandingPagePartner />
              </Route>
            </Switch>
          </Grid>
          <ScrollTop {...props}>
            <Fab color="primary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUp color="textSecondary" />
            </Fab>
          </ScrollTop>
          <br />
          <Footer links={links} />
        </Container>
      </Router>
    </>
  );
}

const links = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Pricing",
    link: "/",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Partner with us",
    link: "/partner-with-us",
  },
  {
    name: "Refer and earn",
    link: "/refer",
  },
];

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
