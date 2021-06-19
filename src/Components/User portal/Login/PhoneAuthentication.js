import { Box, TextField } from "@material-ui/core";
import React, { useState } from "react";
import CustomButton from "../../Common/CustomButton";
import { auth } from "../../../Configurations/Firebase";
import { CommonTypes } from "../../../Redux/Types/commonTypes";
import { useDispatch } from "react-redux";
import { CountryCodes } from "../../Utils/CountryCodes";
import { makeStyles } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
}));
export function PhoneAuthentication(props) {
  const classes = useStyles();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, shouldShowOtp] = useState(false);
  const [serverOtp, setServerOtp] = useState(null);
  // const history = useHistory();
  const dispatch = useDispatch();

  // Firebase call for Verification code
  const requestVerificationCode = () => {
    const appVerifier = new auth.RecaptchaVerifier("phone-sign-in-button", {
      size: "invisible",
      callback: (response) => {
        shouldShowOtp(true);
      },
    });
    auth()
      .signInWithPhoneNumber(countryCode + phoneNumber, appVerifier)
      .then((confirmResult) => {
        setServerOtp(confirmResult); // saving the server otp for future OTP matching
      })
      .catch((error) => props.setIsPhoneAuthSuccess(false));
  };

  // Confirming User input OTP with server OTP
  const confirmOtp = () => {
    serverOtp
      .confirm(otp)
      .then((res) => {
        // Dispatching Action for successful authentication
        dispatch({
          type: CommonTypes.SHOW_NOTIFICATION_ASYNC,
          message: "Phone number verified successfully",
          snackType: "success",
        });
        props.setIsPhoneAuthSuccess(true); // Parent is notified about successful authentication
      })
      .catch((err) => {
        // Dispatching Action for authentication error
        dispatch({
          type: CommonTypes.SHOW_NOTIFICATION_ASYNC,
          message: "wrong OTP",
          snackType: "error",
        });
        props.setIsPhoneAuthSuccess(false); // Parent is notified about authentication error
      });
  };

  // Saving selected Country code
  const handleSelectedCountry = (value) => {
    setCountryCode(value.code);
  };

  const options = CountryCodes.map((option) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <>
      <Box
        display="flex"
        width="100%"
        alignItems="center"
        flexDirection="column"
      >
        {showOtp ? (
          <>
            <Box width="100%" display="flex" justifyContent="center">
              <TextField
                id="mobile"
                label="Enter OTP"
                variant="outlined"
                size="small"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </Box>
            <Box display="flex" justifyContent="center" width="100%" p={2}>
              <Box p={1}>
                <CustomButton
                  color="primary"
                  size="small"
                  id="phone-sign-in-button"
                  onClick={() => requestVerificationCode()}
                >
                  Resend OTP
                </CustomButton>
              </Box>
              <Box p={1}>
                <CustomButton
                  color="primary"
                  size="small"
                  id="phone-sign-in-button"
                  // onClick={() => confirmOtp()}
                  onClick={() => props.setIsPhoneAuthSuccess(true)}
                >
                  Next
                </CustomButton>
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Box width="100%" textAlign="center">
              <Box p={2}>
                <Autocomplete
                  id="grouped-demo"
                  options={options.sort(
                    (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                  )}
                  groupBy={(option) => option.firstLetter}
                  getOptionLabel={(option) => `${option.name} (${option.code})`}
                  onChange={(e, option) => handleSelectedCountry(option)}
                  renderInput={(params) => (
                    <TextField
                      inputRef={params.InputProps.ref}
                      placeholder="Country code"
                      className={classes.select}
                      required
                      size="small"
                      variant="outlined"
                      {...params.inputProps}
                    />
                  )}
                />
              </Box>
              <Box width="100%">
                <TextField
                  id="mobile"
                  label="Enter Mobile number"
                  variant="outlined"
                  size="small"
                  required
                  value={phoneNumber}
                  inputProps={{ maxLength: 10 }}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Box>
            </Box>
            <Box p={3} textAlign="center" width="100%">
              <CustomButton
                color="primary"
                size="small"
                // onClick={() => requestVerificationCode()}
                onClick={() => shouldShowOtp(true)}
                // onClick={()=> history.push('/user/dashboard')}
              >
                {props.type === "Sign In" ? props.type : "Get started"}
              </CustomButton>
            </Box>
            <div id="phone-sign-in-button" />
          </>
        )}
      </Box>
    </>
  );
}
