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
} from "@material-ui/core";
import LandingPageAbout from "./LandingPageAbout";
import LandingPageHome from "./LandingPageHome";
import React from "react";
import Navbar from "../../Components/Landing page/Navbar";
import LandingPageContact from "./LandingPageContact";

const useStyles = makeStyles((theme) => ({
  landingPageRoot: {
    width: "100%",
    minHeight: "100vh",
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
        {["Home", "Movies", "About", "Contact", "Login"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText
              primary={text}
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
          <Toolbar />
          <Drawer
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          </Drawer>

          <Grid Container >
            <Grid item lg={12} style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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
              </Switch>
            </Grid>
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
    link: "/",
  },
  {
    name: "Refer and earn",
    link: "",
  },
];
