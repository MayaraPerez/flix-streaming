/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import "./style.css";

function StreamingForm() {
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
      if(email) {
        sessionStorage.setItem('emailUsuario', email)
      }
  }, [email]);

  const isEmailValid = email.includes("@") && email.includes(".com");
  const isPasswordValid = hasNumber && hasMinLength && hasUppercase;
  const isFormValid = !isEmailValid && !isPasswordValid;

  return (
    <>
      <NavBar />

      <div className="streaming-container">
        <form className="streaming-form">
          <h2>Entrar</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
            className={emailError ? "input-error" : ""}
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={handlePasswordChange}
            onFocus={() => setShowInfo(true)}
            disabled={emailError}
          />

          {showInfo && (
            <div className="info-hiden">
              <span className={hasUppercase ? "valid" : "invalid"}>
                Deve conter 1 letra maiúscula
              </span>

              <span className={hasNumber ? "valid" : "invalid"}>
                Deve conter 1 número
              </span>

              <span className={hasMinLength ? "valid" : "invalid"}>
                Deve conter pelo menos 1 caractere
              </span>
            </div>
          )}

          <button type="submit" disabled={isFormValid}>
            Entrar
          </button>

          <p>
            Não tem conta? <a href="#">Cadastre-se</a>
          </p>
        </form>
      </div>
    </>
  );
}

export default StreamingForm;
