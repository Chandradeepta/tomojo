import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../Configurations/Firebase";
import { CommonTypes } from "../Redux/Types/commonTypes";
import PhoneAuthValidation from "../Validations/PhoneAuthValidation";

export function UsePhoneAuthValidation(setIsPhoneAuthSuccess) {
  const [phoneAuthData, setPhoneAuthData] = useState({
    phoneNumber: "",
    countryCode: "",
    otp: "",
    showOtp: false,
    isPhoneNumberSubmitted: false,
    isOtpSubmitted: false,
    disableButton: false
  });

  const [serverOtp, setServerOtp] = useState(null);

  const [errors, setError] = useState();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPhoneAuthData({
      ...phoneAuthData,
      [name]: value,
    });
  };

  const handleSelectedCountry = (value) => {
    setPhoneAuthData({
      ...phoneAuthData,
      countryCode: value?.code,
    });
  };

  const handleSubmit = () => {
    setError(PhoneAuthValidation(phoneAuthData));
    setPhoneAuthData({
      ...phoneAuthData,
      isPhoneNumberSubmitted: true,
    });
  };

  useEffect(() => {
    phoneAuthData.isPhoneNumberSubmitted &&
      !Object.keys(errors).length &&
      requestVerificationCode();
  }, [errors]);

  const requestVerificationCode = () => {
    setPhoneAuthData({
      ...phoneAuthData,
      disableButton: true,
    });
    const appVerifier = new auth.RecaptchaVerifier("phone-sign-in-button", {
      size: "invisible",
      callback: (response) => {
        setPhoneAuthData({
          ...phoneAuthData,
          showOtp: true,
        });
      },
    });
    auth()
      .signInWithPhoneNumber(
        phoneAuthData.countryCode + phoneAuthData.phoneNumber,
        appVerifier
      )
      .then((confirmResult) => {
        setServerOtp(confirmResult); // saving the server otp for future OTP matching
      })
      .catch((error) => setIsPhoneAuthSuccess(false));
    setPhoneAuthData({
      ...phoneAuthData,
      isPhoneNumberSubmitted: false,
      disableButton: false,
    });
  };

  const confirmOtp = () => {
    serverOtp
      .confirm(phoneAuthData.otp)
      .then((res) => {
        // Dispatching Action for successful authentication
        dispatch({
          type: CommonTypes.SHOW_NOTIFICATION_ASYNC,
          message: "Phone number verified successfully",
          snackType: "success",
        });
        setIsPhoneAuthSuccess(true); // Parent is notified about successful authentication
      })
      .catch((err) => {
        // Dispatching Action for authentication error
        dispatch({
          type: CommonTypes.SHOW_NOTIFICATION_ASYNC,
          message: "wrong OTP",
          snackType: "error",
        });
        setIsPhoneAuthSuccess(false); // Parent is notified about authentication error
      });
  };

  return {
    phoneAuthData,
    errors,
    handleChange,
    handleSelectedCountry,
    handleSubmit,
    confirmOtp,
  };
}
