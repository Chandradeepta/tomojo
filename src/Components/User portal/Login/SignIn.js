import React, { useState } from "react";
import { Typography, Box, Paper, Tabs, Tab } from "@material-ui/core";
import { PhoneAuthentication } from "./PhoneAuthentication";
import { EmailAuthentication } from "./EmailAuthentication";
import { GoogleSignInButton } from "../../Utils/GoogleSignInButton";
import { auth, googleProvider } from "../../../Configurations/Firebase";

export default function SignIn(props) {
  const signInWithGoogle = () => {
    auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        console.log(res);
        // handleLogin(res.credential.idToken, res.user.displayName);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box display="flex" flexDirection="column" width="100%">
        <Paper >
          <Tabs
            value={value}
            centered
            indicatorColor="primary"
            textColor="textPrimary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Email" />
            <Tab label="Phone" />
          </Tabs>
        </Paper>
        {[<EmailAuthentication type="Sign In" />, <PhoneAuthentication type="Sign In"/>].map(
          (auth,i) => {
            return (
              <TabPanel value={value} index={i}>
                {auth}
              </TabPanel>
            );
          }
        )}
        <Box width="100%" textAlign="center" >
          <Typography variant="subtitle2" gutterBottom>
            Or
          </Typography>
          <GoogleSignInButton
            buttonText={`Sign In with Google`}
            onClick={signInWithGoogle}
          />
        </Box>
      </Box>
    </>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
