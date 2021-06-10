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
import BaseBrandContainer from "../Common/BaseBrandContainer";
import clsx from "clsx";
import { NavItem, NavMenu } from "@mui-treasury/components/menu/navigation";
import { Link } from "react-router-dom";

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
  // drawer: {
  //   width: drawerWidth,
  //   flexShrink: 0,
  //   whiteSpace: "nowrap",
  //   marginTop: 6,
  // },
  // drawerOpen: {
  //   width: drawerWidth,
  //   // border: 0,
  //   transition: theme.transitions.create("width", {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  // drawerClose: {
  //   transition: theme.transitions.create("width", {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  //   overflowX: "hidden",
  //   width: 0,
  //   [theme.breakpoints.up("sm")]: {
  //     width: 0,
  //   },
  // },
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
  const [open, setOpen] = React.useState(false);

  const isActive = (path) => {
    return window.location.pathname === `${path}`;
  };

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
        // variant="permanent"
        // onClose={toggleDrawer(false)}
        // onOpen={toggleDrawer(true)}
        // className={clsx(classes.drawer, {
        //   [classes.drawerOpen]: open,
        //   [classes.drawerClose]: !open,
        // })}
        // classes={{
        //   paper: clsx({
        //     [classes.drawerOpen]: open,
        //     [classes.drawerClose]: !open,
        //   }),
        // }}
        anchor={"left"}
        open={open}
        onClose={toggleDrawer(false)}
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
                    <Link
                      // active={isActive(`${sub.path}`)}
                      // as={Link}
                      to={`${sub.path}`}
                    >
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
