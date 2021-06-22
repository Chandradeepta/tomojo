import { RegExObject } from "../RegularExp/RegEx";

export default function PhoneAuthValidation(values) {
  let errors = {};

  if (!values.countryCode.trim()) {
    errors.countryCode = "Country code is required";
  }

  if (!values.phoneNumber.trim()) {
    errors.phoneNumber = "Phone number is required";
  } else if (values.phoneNumber?.length < 10) {
    errors.phoneNumber = "Phone number is not valid";
  }

  return errors;
}
