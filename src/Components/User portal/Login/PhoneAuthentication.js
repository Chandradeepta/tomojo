import { Box, TextField } from "@material-ui/core";
import React from "react";
import CustomButton from "../../Common/CustomButton";
import { CountryCodes } from "../../Utils/CountryCodes";
import { Autocomplete } from "@material-ui/lab";
import { UsePhoneAuthValidation } from "../../../Hooks/usePhoneAuthValidation";

export function PhoneAuthentication(props) {
  const { setIsPhoneAuthSuccess } = props;
  const {
    phoneAuthData,
    errors,
    handleChange,
    handleSelectedCountry,
    handleSubmit,
    confirmOtp,
  } = UsePhoneAuthValidation(setIsPhoneAuthSuccess);

  const { phoneNumber,  otp, showOtp } = phoneAuthData;

  // const history = useHistory();

  // Retrieving Country Codes from a MOCK file
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
                name="otp"
                value={otp}
                autoFocus
                onChange={(e) => handleChange(e)}
              />
            </Box>
            <Box display="flex" justifyContent="center" width="100%" p={2}>
              <Box p={1}>
                <CustomButton
                  color="primary"
                  size="small"
                  id="phone-sign-in-button"
                  onClick={() => handleSubmit()}
                >
                  Resend OTP
                </CustomButton>
              </Box>
              <Box p={1}>
                <CustomButton
                  color="primary"
                  size="small"
                  id="phone-sign-in-button"
                  onClick={() => confirmOtp()}
                >
                  {props.type === "Sign In" ? props.type : "Next"}
                </CustomButton>
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Box width="100%" textAlign="center">
              <Box pb={2} width="100%">
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
                      required
                      fullWidth
                      size="small"
                      variant="outlined"
                      {...params.inputProps}
                      {...(errors?.countryCode && { error: true })}
                      {...(errors?.countryCode && {
                        helperText: errors?.countryCode,
                      })}
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
                  fullWidth
                  name="phoneNumber"
                  value={phoneNumber}
                  inputProps={{ maxLength: 10 }}
                  onInput={handleChange}
                  {...(errors?.phoneNumber && { error: true })}
                  {...(errors?.phoneNumber && {
                    helperText: errors?.phoneNumber,
                  })}
                />
              </Box>
            </Box>
            <Box p={3} pb={1} textAlign="center" width="100%">
              <CustomButton
                color="primary"
                size="small"
                {...phoneAuthData.disableButton && {disabled :true}}
                onClick={() => handleSubmit()}
              >
                {props.type === "Sign In" ? "Next" : "Get started"}
              </CustomButton>
            </Box>
            <div id="phone-sign-in-button" />
          </>
        )}
      </Box>
    </>
  );
}
