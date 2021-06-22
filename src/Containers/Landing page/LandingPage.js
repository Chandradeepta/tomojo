import React, { lazy, useEffect, useRef, Suspense } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
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
import { KeyboardArrowUp, Widgets } from "@material-ui/icons";
import Navbar from "../../Components/Landing page/Navbar";
import clsx from 'clsx'

const Login = lazy(() => import("../Login"));
const Footer = lazy(() => import("../../Components/Common/Footer"));
const LandingPageHome = lazy(() => import("./LandingPageHome"));
const LandingPageContact = lazy(() => import("./LandingPageContact"));
const LandingPageReferral = lazy(() => import("./LandingPageReferral"));
const LandingPagePartner = lazy(() => import("./LandingPagePartner"));
const LandingPageAbout = lazy(() => import("./LandingPageAbout"));
const LandingPageBlogs = lazy(() => import("./LandingPageBlogs"));
const LandingPagePricing = lazy(() => import("./LandingPagePricing"));

const useStyles = makeStyles((theme) => ({
  landingPageRoot: {
    width: "100%",
    minHeight: "100vh",
  },
  initialContainer: {
    padding: "7%",
    paddingTop: "0%",
    paddingBottom: "1%",
    minHeight: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: 'relative',
    [theme.breakpoints.down("sm")]: {
      padding: "2%",
    },
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
      <Container maxWidth="lg" className={clsx(classes.landingPageRoot)}>
        <Suspense
          fallback={
            <Box
              width="100%"
              minHeight="100vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Widgets color="secondary" style={{ fontSize: "20vh" }} />
            </Box>
          }
        >
          <Navbar toggleDrawer={toggleDrawer} links={links} />
          <Toolbar id="back-to-top-anchor" />
          <Drawer
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          </Drawer>

          <Grid container className={clsx(classes.initialContainer)}>
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
              <Route exact path={`/pricing`}>
                <LandingPagePricing />
              </Route>
              <Route exact path={`/blogs`}>
                <LandingPageBlogs />
              </Route>
              <Route exact path={`/login`}>
                <Login />
              </Route>
            </Switch>
          </Grid>
          <ScrollTop {...props}>
            <Fab color="primary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUp color="primary" />
            </Fab>
          </ScrollTop>
          <br />
          <Footer links={links} />
        </Suspense>
      </Container>
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
    link: "/pricing",
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
