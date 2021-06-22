import { Box, makeStyles, Paper, TextField } from "@material-ui/core";
import CustomButton from "../Common/CustomButton";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "70%",
    borderRadius: 20,
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));
export default function ContactUsForm(props) {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper} elevation={0}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            label="Your Mobile number"
            id="mobile"
            variant="outlined"
            className={classes.textField}
            margin="dense"
            fullWidth
            required
          />
          <TextField
            label="Full name"
            id="name"
            variant="outlined"
            className={classes.textField}
            margin="dense"
            fullWidth
          />
          <TextField
            label="Email"
            id="email"
            variant="outlined"
            className={classes.textField}
            margin="dense"
            fullWidth
          />
          <TextField
            label="Class"
            id="class"
            variant="outlined"
            className={classes.textField}
            margin="dense"
            fullWidth
          />
          <TextField
            label="City"
            id="city"
            variant="outlined"
            className={classes.textField}
            margin="dense"
            fullWidth
          />

          <TextField
            id="message"
            label="Message"
            variant="outlined"
            placeholder="Your Message"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            multiline
            rows={3}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Box className={classes.textField} textAlign="right" width="100%">
            <CustomButton color="primary" size="small">
              Send Message
            </CustomButton>
          </Box>
        </form>
      </Paper>
    </>
  );
}
