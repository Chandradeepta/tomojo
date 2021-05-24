import React from "react";
import {
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
  Box,
  Container,
} from "@material-ui/core";
import clsx from "clsx";
import Navbar from "../../Components/Landing page/Navbar";
import Illustraion1 from "../../Assets/Nerd-amico.svg";
import RoundedButton from "../../Components/Landing page/RoundedButton";
import OfferedServices from "../../Components/Landing page/OfferedServices";
import Background from "../../Assets/bg.svg";

const mainContainerStyles = makeStyles((theme) => ({
  landingPageRoot: {
    width: "100%",
    paddingLeft: `${theme.spacing(1)}%`,
    paddingRight: `${theme.spacing(1)}%`,
    fontFamily: "'Josefin Sans', sans-serif",
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
  contentContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  contentContainer_alt: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  imageContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  illustration1: {
    [theme.breakpoints.up["sm"]]: {
      display: "none",
    },
  },
  illustration1Mobile: {
    [theme.breakpoints.up["xs"]]: {
      display: "none",
    },
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  services: {
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.spacing(4),
  },
}));

export default function LandingPage(props) {
  const classes = mainContainerStyles();
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
      <Container maxWidth="lg" className={classes.landingPageRoot}>
        <Navbar toggleDrawer={toggleDrawer} links={links} />
        <Drawer
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </Drawer>
        <Grid container>
          <Grid
            container
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={classes.contentContainer}
          >
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className={classes.textContainer}
            >
              <Typography
                variant="h3"
                className={classes.bold}
                gutterBottom
                color="textPrimary"
              >
                Let your child lead the academics
              </Typography>
              <Typography
                variant="body1"
                align="justify"
                gutterBottom
                color="textSecondary"
              >
                Give your child handpicked questions to practise and ensure
                indepth understanding
              </Typography>
              <Box pt={3}>
                <RoundedButton>Get started</RoundedButton>
              </Box>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className={classes.contentContainer}
            >
              <img src={Illustraion1} className={classes.illustration1} />
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box pt={5}>
              <Typography
                variant="h4"
                className={classes.bold}
                align="center"
                color="secondary"
                gutterBottom
              >
                What we offer
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={classes.services}
          >
            <OfferedServices />
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            container
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={clsx(
              classes.contentContainer,
              classes.contentContainer_alt
            )}
          >
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className={classes.contentContainer}
            >
              <img src={Illustraion1} className={classes.illustration1} />
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className={classes.textContainer}
            >
              <Typography
                variant="h3"
                className={classes.bold}
                gutterBottom
                color="textPrimary"
              >
                Let your child lead the academics
              </Typography>
              <Typography
                variant="body1"
                align="justify"
                gutterBottom
                color="textSecondary"
              >
                Give your child handpicked questions to practise and ensure
                indepth understanding
              </Typography>
              <Box pt={3}>
                <RoundedButton>Get started</RoundedButton>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

const links = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Exams",
  },
  {
    name: "Pricing",
  },
  {
    name: "Contact",
  },
];
