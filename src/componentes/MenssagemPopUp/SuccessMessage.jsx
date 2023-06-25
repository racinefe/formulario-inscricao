import { useState } from "react";
import img from '../MenssagemPopUp/icon-success.svg';
import "./style.css";

function SuccessMessage({ message,email, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <>
      {isVisible && (
        <div className="success-message">
            <img className="image" src={img} alt="Form Image" />
            <h1>{message}</h1>
            <p>A confirmation email has been sent to {email}. Please open it and click the button inside to confirm your subscription. </p>
          <button className="close-button" onClick={handleClose}>
            Dismiss message
          </button>
        </div>
      )}
    </>
  );
}

export default SuccessMessage;
