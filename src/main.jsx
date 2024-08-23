import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Rotas from './components/Rotas'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Rotas/>
  </StrictMode>,
)
