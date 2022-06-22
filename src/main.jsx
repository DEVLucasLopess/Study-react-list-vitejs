import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home/Home'
import './styles/global.css' //importando o arquivo css para o arquivo principal.

ReactDOM.createRoot(
  document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
