import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
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
} from "@material-ui/core";
import LandingPageAbout from "./LandingPageAbout";
import LandingPageHome from "./LandingPageHome";
import React from "react";
import Navbar from "../../Components/Landing page/Navbar";
import LandingPageContact from "./LandingPageContact";
import LandingPageReferral from "./LandingPageReferral";
import LandingPagePartner from "./LandingPagePartner";

const useStyles = makeStyles((theme) => ({
  landingPageRoot: {
    width: "100%",
    minHeight: "100vh",
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
  let { path, url } = useRouteMatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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
          <Drawer
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          </Drawer>
          <Toolbar />

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
