import { makeStyles, TextField, Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React from "react";
import CustomButton from "../../Common/CustomButton";

const useStyles = makeStyles((theme) => ({
  emailSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  TextField: {
    margin: "3%",
  },
}));
export function EmailAuthentication(props) {
  const classes = useStyles();
  const { type } = props;

  return (
    <>
      <Box width="100%">
        <Box className={classes.emailSection}>
          <TextField
            id="mobile"
            label="Enter your Email"
            variant="outlined"
            size="small"
            className={classes.TextField}
            fullWidth
          />
          {type === "Sign Up" ? (
            <>
              <TextField
                id="mobile"
                label="Create a password"
                variant="outlined"
                size="small"
                className={classes.TextField}
                fullWidth
              />

              <TextField
                id="mobile"
                label="Confirm password"
                variant="outlined"
                size="small"
                className={classes.TextField}
                fullWidth
              />
            </>
          ) : (
            <TextField
              id="mobile"
              label="Enter Password"
              variant="outlined"
              size="small"
              className={classes.TextField}
              fullWidth
            />
          )}
        </Box>
        <Box textAlign="center" p={1}>
          <CustomButton
            color="primary"
            size="small"
            // onClick={() => requestVerificationCode()}
          >
            {type}
          </CustomButton>
        </Box>
      </Box>
    </>
  );
}
