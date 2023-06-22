import EmailField from "../Email";
import FormParagraph from "../Paragraph";
import FormTitle from "../Titulo";
import "./style.css";



function Form() {
  return (
    
      <form action="" className="form">
        <div className="container">
          <FormTitle />
          <FormParagraph />
          <EmailField />
        </div>
      </form>
   
  );
}

export default Form;
