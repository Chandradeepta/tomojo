import { RegExObject } from "../RegularExp/RegEx";

export default function EmailAuthValidation(values) {
  let errors = {};

  if (
    !values.passwordConfirmation.trim() ||
    values.passwordConfirmation.trim() !== values.password.trim()
  ) {
    errors.passwordConfirmation = "Password doesn't match";
  }

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
