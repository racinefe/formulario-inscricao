#  Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview


### Screenshot

![](https://cdn.discordapp.com/attachments/1089186196858622065/1122848817566470215/aaaaaaa.png)



### Links

- Deployment URL: [Deployment ](https://formulario-inscricao-three.vercel.app)
- Video Project URL: [Video](https://drive.google.com/file/d/1l8OouVuiT9hSlVYCA_gOCxNp0pmPJC90/view?usp=sharing)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [Node.js](https://nodejs.org/en) - React framework
- [Vite](https://vitejs.dev) - to Build



### What I learned

Nesse projeto aprendi a utilizar hook da biblioteca React, que me permite adicionar estados a componentes funcionais no React.


```js
//exemplo de um componente de contador simples usando o useState:
import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
}
```
Aprendi a criar uma lógica para  validação de e-mail.

```js
 // Lógica de validação de e-mail (pode ser uma expressão regular ou outra forma de validação)
// Neste exemplo, é considerado válido se tiver pelo menos um caractere antes e depois do ' @ ' e a extensão '.com ' no final
const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\./;
    const hasComExtension = email.endsWith(".com");
    return regex.test(email) && hasComExtension;
  };
}
```

### Useful resources

- [Conceitos básicos de Grid Layout](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) - Isso me ajudou na organização dos elementos. 
- [Separation of Concerns in React –How to Use Container and Presentational Components](https://www.freecodecamp.org/news/separation-of-concerns-react-container-and-presentational-components/) - Este artigo incrível me ajudou a entender Como usar contêineres e componentes. Recomendo a todos que ainda estão aprendendo esse conceito.

## Author

- GitHub - [@racinefell](https://github.com/racinefe)
- Linkedin - [Racine Fellipe](linkedin.com/in/racinefellipe)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
