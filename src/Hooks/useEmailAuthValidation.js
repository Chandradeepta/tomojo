import { useState } from "react";
import EmailAuthValidation from "../Validations/EmailAuthValidation";

export const useEmailAuthValidation = () => {
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const [errors, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e;
    setAuthData({
      ...authData,
      name: value,
    });
  };

  const handleSubmit = () => {
    setError(EmailAuthValidation(authData));
  };

  return {
    authData,
    handleChange,
    handleSubmit,
    errors,
  };
};
