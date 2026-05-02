/* eslint-disable jsx-a11y/anchor-is-valid */
import NavBar from "../../components/NavBar";
import "./style.css";
import useFormValidation from "../../utils/formValidation";

function StreamingForm() {
  const FormValidation = useFormValidation();

  return (
    <>
      <NavBar />

      <div className="streaming-container">
        <form className="streaming-form">
          <h2>Entrar</h2>

          <input
            type="email"
            placeholder="Email"
            value={FormValidation.email}
            onChange={FormValidation.handleEmail}
            className={FormValidation.emailError ? "input-error" : ""}
          />

          <input
            type="password"
            placeholder="Senha"
            value={FormValidation.password}
            onChange={FormValidation.handlePasswordChange}
            onFocus={() => FormValidation.setShowInfo(true)}
            disabled={!FormValidation.isEmailValid}
          />

          {FormValidation.showInfo && (
            <div className="info-hiden">
              <span className={FormValidation.hasUppercase ? "valid" : "invalid"}>
                Deve conter 1 letra maiúscula
              </span>

              <span className={FormValidation.hasNumber ? "valid" : "invalid"}>
                Deve conter 1 número
              </span>

              <span className={FormValidation.hasMinLength ? "valid" : "invalid"}>
                Deve conter pelo menos 1 caractere
              </span>
            </div>
          )}

          <button type="submit" disabled={FormValidation.isFormValid}>
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
