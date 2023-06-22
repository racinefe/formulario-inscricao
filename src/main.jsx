import React from 'react'
import ReactDOM from 'react-dom/client'
import Form from './componentes/Form/index'
import './index.css'
import FrontendMentor from './componentes/Attributions'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Form />
    <FrontendMentor />
  </React.StrictMode>,
)
