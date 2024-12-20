import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Welcome from './pages/Welcome.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

  /* can also use the  Welcome form pages */

  </StrictMode>,
)

