#  Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Índice

- [Visão geral](#visão-geral)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Meu processo](#Meu-processo)
  - [Construído com](#Construído-com)
  - [O que eu aprendi](#O-que-eu-aprendi)
  - [Continued development](#continued-development)
  - [ Recursos úteis](#Recursos-úteis)
- [Autor](#Autor)
- [Acknowledgments](#acknowledgments)

## Visão geral


### Screenshot

![](https://cdn.discordapp.com/attachments/1089186196858622065/1122848817566470215/aaaaaaa.png)



### Links

- Deployment URL: [Deployment ](https://formulario-inscricao-three.vercel.app)
- Video Project URL: [Video](https://drive.google.com/file/d/1l8OouVuiT9hSlVYCA_gOCxNp0pmPJC90/view?usp=sharing)

## Meu processo

### Construído com

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [Node.js](https://nodejs.org/en) - React framework
- [Vite](https://vitejs.dev) - to Build



### O que eu aprendi

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

### Recursos úteis

- [Conceitos básicos de Grid Layout](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) - Isso me ajudou na organização dos elementos. 
- [Separation of Concerns in React –How to Use Container and Presentational Components](https://www.freecodecamp.org/news/separation-of-concerns-react-container-and-presentational-components/) - Este artigo incrível me ajudou a entender Como usar contêineres e componentes. Recomendo a todos que ainda estão aprendendo esse conceito.

## Autor

- GitHub - [@racinefell](https://github.com/racinefe)
- Linkedin - [Racine Fellipe](linkedin.com/in/racinefellipe)

  [##Return to top](#Newsletter)
