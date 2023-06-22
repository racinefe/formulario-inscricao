import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

function FormParagraph() {
  return (
    <div>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <p>
        <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#ff4000" }} />{" "}
        Product discovery and building what matters
      </p>
      <p>
        <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#ff4000" }} />{" "}
        Measuring to ensure updates are a success
      </p>
      <p>
        <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#ff4000" }} />{" "}
        And much more!
      </p>
    </div>
  );
}
export default FormParagraph;
