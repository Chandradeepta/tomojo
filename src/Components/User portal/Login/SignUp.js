import React, { useState } from "react";
import { Typography, Box } from "@material-ui/core";
import { PhoneAuthentication } from "./PhoneAuthentication";
import { EmailAuthentication } from "./EmailAuthentication";

export default function SignUp(props) {
  const [isPhoneAuthSuccess, setIsPhoneAuthSuccess] = useState(false);

  return (
    <>
      {!isPhoneAuthSuccess ? (
        <PhoneAuthentication setIsPhoneAuthSuccess={setIsPhoneAuthSuccess} />
      ) : (
        <EmailAuthentication type="Sign Up" />
      )}
    </>
  );
}
