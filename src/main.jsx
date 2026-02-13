import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'flag-icons/css/flag-icons.min.css' // banderas por CSS
import './i18n/i18n.js' // inicializamos i18n antes de montar la app
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)