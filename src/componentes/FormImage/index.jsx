import { useState,useEffect } from 'react';
import formImage1 from '../FormImage/illustration-sign-up-desktop.svg';
import formImage2 from '../FormImage/illustration-sign-up-mobile.svg'
import '../FormImage/style.css';




function FormImage() {
  const [imageSrc, setImageSrc] = useState(formImage1);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 798) {
        setImageSrc(formImage2);
      }else {
        setImageSrc(formImage1);
      }
    }
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[]);

  return (
    <div className="form-image">
      <img id="formImage" src={imageSrc} alt="Form Image" />
    </div>
  );
}

export default FormImage
