import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/layout.css'
import './styles/main.css'
import App from './ui/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
