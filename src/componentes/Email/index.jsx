import { useState } from "react";
import SuccessMessage from "../MenssagemPopUp/SuccessMessage";
import "./style.css";

function EmailField() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setIsValidEmail(false);
      return;
    }

    setIsSubmitted(true);
    setShowSuccessMessage(true);
    
  };

  const validateEmail = (email) => {
    // Lógica de validação de e-mail (pode ser uma expressão regular ou outra forma de validação)
    // Neste exemplo, é considerado válido se tiver pelo menos um caractere antes do @ e a extensão '.com'
    const regex = /^[^\s@]+@[^\s@]+\./;
    const hasComExtension = email.endsWith(".com");
    return regex.test(email) && hasComExtension;
  };

  const handleSuccessMessageClose = () => {
    setShowSuccessMessage(false);
  };

  return (
    <div className="inputs">
      <label>Email address</label>

      <input
        type="email"
        placeholder="email@company.com"
        value={email}
        onChange={handleEmailChange}
        className={`input-email ${!isValidEmail ? "invalid-email" : ""}`}
      />
      <button
        className="centered-button"
        onClick={handleSubmit}
        disabled={!validateEmail || isSubmitted}
      >
        {isSubmitted ? "Subscribed!" : "Subscribe to monthly newsletter"}
      </button>

      {!isValidEmail && <p className="error-message">Invalid email address</p>}
      {showSuccessMessage && (
        <SuccessMessage
          message="Thanks for subcribing!"
          email={email}
          onClose={handleSuccessMessageClose}
        />
      )}
    </div>
  );
}

export default EmailField;
