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
} from "@material-ui/core";
import LandingPageAbout from "./LandingPageAbout";
import LandingPageHome from "./LandingPageHome";
import React from "react";
import Navbar from "../../Components/Landing page/Navbar";

const useStyles = makeStyles((theme) => ({
  landingPageRoot: {
    width: "100%",
    padding: "8%",
  },
  initialContainer: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "10%",
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
      {console.log(path, url)}
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

          <Switch>
            <Route exact path={`/home`}>
              <LandingPageHome />
            </Route>
            <Route exact path={`/about`}>
              <LandingPageAbout />
            </Route>
          </Switch>
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
    link: "/",
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
