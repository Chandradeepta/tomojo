import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import LoginGif from "../Assets/Login.gif";

const useStyles = makeStyles((theme) => ({
  brand: {
    letterSpacing: theme.spacing(1),
    fontWeight: theme.typography.fontWeightBold,
  },
}));
export default function Login(props) {
  const classes = useStyles();
  return (
    <>
      <Grid container style={{ marginTop: "-4%" }}>
        <Grid item lg={8} md={8} sm={8} xs={8}>
          <img src={LoginGif} />
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={4}>
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            pt={10}
          >
            <Typography
              variant="h6"
              color="secondary"
              className={classes.brand}
            >
              WELCOME TO
            </Typography>
            <Typography
              variant="h2"
              className={classes.brand}
              color="textPrimary"
            >
              TOMOJO
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
