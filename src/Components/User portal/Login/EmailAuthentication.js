import { makeStyles, TextField, Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React from "react";
import { useEmailAuthValidation } from "../../../Hooks/useEmailAuthValidation";
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
  const { authData, handleSubmit, handleChange, errors } =
    useEmailAuthValidation();

  return (
    <>
      <Box width="100%">
        <Box className={classes.emailSection}>
          <TextField
            id="mobile"
            label="Enter your Email"
            type="email"
            variant="outlined"
            size="small"
            name="email"
            fullWidth
            className={classes.TextField}
            {...(errors.email && { error: true })}
            onChange={(e) => handleChange(e)}
            value={authData.email}
            helperText={errors.email}
          />
          {type === "Sign Up" ? (
            <>
              <TextField
                id="mobile"
                label="Create a password"
                variant="outlined"
                size="small"
                name="password"
                fullWidth
                className={classes.TextField}
                {...(errors.password && { error: true })}
                onChange={(e) => handleChange(e)}
                value={authData.password}
                helperText={errors.password}
              />

              <TextField
                id="mobile"
                label="Confirm password"
                variant="outlined"
                size="small"
                name="passwordConfirmation"
                fullWidth
                className={classes.TextField}
                onChange={(e) => handleChange(e)}
                value={authData.passwordConfirmation}
                {...(errors.passwordConfirmation && { error: true })}
                helperText={errors.passwordConfirmation}
              />
            </>
          ) : (
            <TextField
              id="mobile"
              label="Enter Password"
              variant="outlined"
              size="small"
              name="password"
              className={classes.TextField}
              fullWidth
              {...(errors.password && { error: true })}
              onChange={(e) => handleChange(e)}
              value={authData.password}
              helperText={errors.password}
            />
          )}
        </Box>
        <Box textAlign="center" p={1}>
          <CustomButton color="primary" size="small" onClick={handleSubmit}>
            {type}
          </CustomButton>
        </Box>
      </Box>
    </>
  );
}
