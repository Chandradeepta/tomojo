import { Box, makeStyles, Paper, TextField } from "@material-ui/core";
import CustomButton from "./CustomButton";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "70%",
    borderRadius: 20,
    border: `2px solid`,
    borderColor: theme.palette.primary.light,
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
      <Paper className={classes.paper} elevation={3}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            label="Your name"
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
            id="message"
            label="Message"
            variant="outlined"
            placeholder="Your Message"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            multiline
            rows={6}
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
