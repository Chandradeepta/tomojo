import React, { useState } from "react";
import { Typography, Box } from "@material-ui/core";
import { PhoneAuthentication } from "./PhoneAuthentication";
import { EmailAuthentication } from "./EmailAuthentication";

export default function SignUp(props) {
  const { isPhoneAuthSuccess, setIsPhoneAuthSuccess } = props;

  return (
    <>
      {!isPhoneAuthSuccess ? (
        <PhoneAuthentication
          setIsPhoneAuthSuccess={setIsPhoneAuthSuccess}
          isPhoneAuthSuccess={isPhoneAuthSuccess}
        />
      ) : (
        <EmailAuthentication type="Sign Up" />
      )}
    </>
  );
}
