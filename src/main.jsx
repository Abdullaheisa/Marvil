import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./app.scss"
import { IsMobileProvider } from './utilis/IsMobileContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <IsMobileProvider>

    <App />
  </IsMobileProvider>
  // </StrictMode>,
)
