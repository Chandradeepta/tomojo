import { RegExObject } from "../RegularExp/RegEx";

export default function EmailAuthValidation(values) {
  let errors = {};

  // if (!values.passwordConfirmation.trim()) {
  //   errors.passwordConfirmation = "Password Confirmation is required";
  // }

  if (!values.email.trim()) {
    errors.email = "Email address is required";
  } else {
    !RegExObject.EMAIL.test(String(values.email.trim()).toLowerCase()) &&
      (errors.email = "Email adress is not valid");
  }

  if (!values.password.trim()) {
    errors.password = "Password is required";
  }

  return errors;
}
