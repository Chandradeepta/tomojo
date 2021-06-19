import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  Home,
  CardMembership,
  AccountBox,
  AssignmentTurnedInSharp,
  AssignmentLate,
  Receipt,
  Share,
} from "@material-ui/icons";
import { Box, IconButton } from "@material-ui/core";
import { Widgets, Menu } from "@material-ui/icons";
import clsx from "clsx";
import { NavItem, NavMenu } from "@mui-treasury/components/menu/navigation";
import { Link } from "react-router-dom";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  hamburgerButton: {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  hide:{
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  brandSpace: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flex: 0,
    },
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
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  leftDrawer: {
    width: drawerWidth,
  },
  leftDrawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  leftDrawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
  },
  List: {
    [theme.breakpoints.up("sm")]: {
      padding: 10,
    },
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default function UserHeader(props) {
  const classes = useStyles();
  const [openLeftDrawer, setOpenLeftDrawer] = React.useState(false);

  const isActive = (path) => {
    return window.location.pathname === `${path}`;
  };

  const toggleLeftDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenLeftDrawer(open);
  };

  const handleRightDrawerOpen = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    props.setOpenRightDrawer(!props.openRightDrawer);
  };
  return (
    <>
      <AppBar
        position="fixed"
        color="inherit"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.openRightDrawer,
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.hamburgerButton}
            color="primary"
            aria-label="menu"
            onClick={toggleLeftDrawer(!openLeftDrawer)}
          >
            <Menu />
          </IconButton>
          <Box className={classes.brandSpace}>
            <IconButton edge="start" color="secondary" aria-label="logo">
              <Widgets fontSize={"large"} />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              TOMOJO
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleRightDrawerOpen}
              className={clsx(classes.hamburgerButton, classes.hide)}
              style={{position: 'absolute', right: 0}}
            >
              <Menu />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        classes={{
          paper: clsx({
            [classes.leftDrawerOpen]: openLeftDrawer,
            [classes.leftDrawerClose]: !openLeftDrawer,
          }),
        }}
        className={classes.leftDrawer}
        anchor={"left"}
        open={openLeftDrawer}
        onClose={toggleLeftDrawer(false)}
      >
        <Toolbar />

        <div className={classes.drawerContainer}>
          {drawerNavs.map((each, index) => {
            return (
              <>
                <List className={classes.List} dense key={index}>
                  <ListItem>
                    <ListItemText primary={each.category} />
                  </ListItem>
                  {each.subCategory.map((sub, index) => (
                    <Link to={`${sub.path}`} onClick={toggleLeftDrawer(false)}>
                      <ListItem
                        button
                        key={index}
                        selected={isActive(`${sub.path}`)}
                      >
                        <ListItemIcon>{sub.icon}</ListItemIcon>
                        <ListItemText primary={sub.label} />
                      </ListItem>
                    </Link>
                  ))}
                </List>
                <Divider />
              </>
            );
          })}
        </div>
      </Drawer>
    </>
  );
}

const drawerNavs = [
  {
    category: "General",
    subCategory: [
      {
        label: "Dashboard",
        path: "/user/dashboard",
        icon: <Home fontSize="small" />,
      },
      {
        label: "My Packages",
        path: "/user/packages",
        icon: <CardMembership fontSize="small" />,
      },
    ],
  },
  {
    category: "Tests",
    subCategory: [
      {
        label: "Yet to attempt",
        icon: <AssignmentLate fontSize="small" color="error" />,
      },
      {
        label: "Attempted",
        icon: (
          <AssignmentTurnedInSharp
            fontSize="small"
            style={{ color: "#1E8E3E" }}
          />
        ),
      },
    ],
  },
  {
    category: "Profile",
    subCategory: [
      {
        label: "My profile",
        icon: <AccountBox fontSize="small" />,
      },
      {
        label: "Transactions",
        icon: <Receipt fontSize="small" />,
      },
      {
        label: "Referrals",
        icon: <Share fontSize="small" />,
      },
    ],
  },
];
