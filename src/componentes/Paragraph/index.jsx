import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import "./style.css";

function FormParagraph() {
  return (
    <div className="form-paragraph">
      <div className="paragraph-container">
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
      </div>
      
      <div className="paragraph-container">
        <div className="icon">
          <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#ff4000" }} />
        </div>
        <p>Product discovery and building what matters</p>
      </div>

      <div className="paragraph-container">
        <div className="icon">
          <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#ff4000" }} />
        </div>
        <p>Measuring to ensure updates are a success</p>
      </div>

      <div className="paragraph-container">
        <div className="icon">
          <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#ff4000" }} />
        </div>
        <p>And much more!</p>
      </div>
    </div>
  );
}

export default FormParagraph;
