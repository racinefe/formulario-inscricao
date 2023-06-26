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
exemplo de um componente de contador simples usando o useState:
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

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
