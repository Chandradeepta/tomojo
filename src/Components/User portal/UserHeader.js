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
import { theme } from "../../Configurations/MaterialUIConfig";
import {
  Mail,
  Home,
  CardMembership,
  AccountBox,
  AssignmentTurnedInSharp,
  AssignmentLate,
  Receipt,
  Share,
} from "@material-ui/icons";
import BaseBrandContainer from "../Common/BaseBrandContainer";
import clsx from "clsx";

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    marginTop: 6,
  },
  drawerOpen: {
    width: drawerWidth,
    border: 0,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  hamburgerButton: {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
    [theme.breakpoints.up("lg")]: {
      display: "none",
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
  List: {
    [theme.breakpoints.up("sm")]: {
      padding: 10,
    },
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

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
  return (
    <>
      <AppBar position="fixed" color="inherit" className={clsx(classes.appBar)}>
        <Toolbar>
          <BaseBrandContainer toggleDrawer={toggleDrawer} open={open} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        nClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
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
                    <ListItem button key={index}>
                      <ListItemIcon>{sub.icon}</ListItemIcon>
                      <ListItemText primary={sub.label} />
                    </ListItem>
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
        icon: <Home fontSize="small" />,
      },
      {
        label: "My Packages",
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
