import {
  Box,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Widgets, Menu } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  hamburgerButton: {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  brandSpace: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]:{
      flex: 0
    }
  },
  title: {
    textAlign: "left",
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: theme.spacing(0.5),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.05rem",
    },
  },
}));
export default function BaseBrandContainer(props) {
  const classes = useStyles();
  return (
    <>
      <IconButton
        edge="start"
        className={classes.hamburgerButton}
        color="primary"
        aria-label="menu"
        onClick={props.toggleDrawer(!props.open)}
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
      </Box>
    </>
  );
}
