import { Box, IconButton, makeStyles, Typography } from "@material-ui/core";
import { Phone, Mail, LocationCity } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  socialContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "1%",
    [theme.breakpoints.down("sm")]:{
        justifyContent: "center"
    }
  },
  social: {
    marginLeft: theme.spacing(0.7),
    color: theme.palette.primary.main
  },
}));
export default function ContactInfo(props) {
  const classes = useStyles();
  return (
    <>
      <Box display="flex" flexDirection="column" mt={1}>
        <Box display="flex" alignItems="center" p={1}>
          <Box p={1} pr={1}>
            <Phone color="secondary" />
          </Box>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.bold}
          >
            +91 9999423515, +91 9650365861
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" p={1}>
          <Box p={1} pr={1}>
            <Mail color="secondary" />
          </Box>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.bold}
          >
            info@tomojo.in, support@tomojo.in
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" p={1}>
          <Box p={1} pr={1}>
            <LocationCity color="secondary" />
          </Box>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.bold}
          >
            S.NO.61, Okhla Industrial Estate, Okhla Phase III, New Delhi 110020
          </Typography>
        </Box>

        <Box className={classes.socialContainer}>
          <Box p={1} pr={1}>
            {SOCIAL.map((each) => {
              return (
                <IconButton
                  edge="start"
                  className={classes.social}
                  color="inherit"
                  aria-label="menu"
                >
                  <i className={each.class}></i>
                </IconButton>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
}

const SOCIAL = [
  {
    class: "fab fa-facebook",
    link: "",
  },
  {
    class: "fab fa-twitter",
    link: "",
  },
  {
    class: "fab fa-instagram",
    link: "",
  },
  {
    class: "fab fa-linkedin",
    link: "",
  },
  {
    class: "fab fa-vimeo",
    link: "",
  },
];
