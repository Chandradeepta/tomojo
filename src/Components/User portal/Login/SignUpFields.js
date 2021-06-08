import { Box, TextField } from "@material-ui/core";
import React, { useState } from "react";
import CustomButton from "../../Common/CustomButton";
import { auth } from "../../../Configurations/Firebase";
import { useHistory, useLocation } from "react-router";

export function SignupFields(props) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, shouldShowOtp] = useState(false);
  const [serverOtp, setServerOtp] = useState(null);
  const history = useHistory();

  const requestVerificationCode = () => {
    const appVerifier = new auth.RecaptchaVerifier(
      "phone-sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          shouldShowOtp(true);
        },
      }
    );
    auth
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmResult) => {
        setServerOtp(confirmResult);
      })
      .catch((error) => console.log("Error", error));
  };

  const signUp = () => {
    serverOtp
      .confirm(otp)
      .then((res) => {
        console.log("res", res);
        // history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Box display="flex" width="100%" justifyContent="space-evenly">
        {showOtp ? (
          <>
            <TextField
              id="mobile"
              label="Enter OTP"
              variant="outlined"
              size="small"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <CustomButton
              color="primary"
              size="small"
              id="phone-sign-in-button"
              onClick={() => signUp()}
            >
              Sign up
            </CustomButton>
          </>
        ) : (
          <>
            <TextField
              id="mobile"
              label="Enter Mobile number"
              variant="outlined"
              size="small"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <CustomButton
              color="primary"
              size="small"
              id="phone-sign-in-button"
              // onClick={() => requestVerificationCode()}
              onClick={()=> history.push("/dashboard")}
            >
              Get started
            </CustomButton>
          </>
        )}
      </Box>
    </>
  );
}
