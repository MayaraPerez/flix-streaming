/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function useFormValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);

  const [showInfo, setShowInfo] = useState(false);

  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasMinLength, setHasMinLength] = useState(false);

  function handlePasswordChange(e) {
    const value = e.target.value;
    setPassword(value);

    setHasUppercase(/[A-Z]/.test(value));
    setHasNumber(/[0-9]/.test(value));
    setHasMinLength(value.length >= 5);
  }

  function handleEmail(e) {
    const value = e.target.value;
    setEmail(value);

    if (!value.includes("@") || !value.includes(".com")) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }

  useEffect(() => {
    if (email) {
      sessionStorage.setItem("emailUsuario", email);
    }
  }, [email]);

  const isEmailValid = email.includes("@") && email.includes(".com");
  const isPasswordValid = hasNumber && hasMinLength && hasUppercase;
  const isFormValid = !isEmailValid && !isPasswordValid;

  return {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    setEmailError,
    showInfo,
    setShowInfo,
    hasUppercase,
    hasNumber,
    hasMinLength,
    handlePasswordChange,
    handleEmail,
    isEmailValid,
    isPasswordValid,
    isFormValid,
  };
}

export default useFormValidation;