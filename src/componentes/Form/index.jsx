import EmailField from "../Email";
import FormImage from "../FormImage";
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
        <FormImage />
      </form>
   
  );
}

export default Form;
