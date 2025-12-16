import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WeddingApp from './pages/wedding.jsx'
import RaissaApp from './pages/wedding-raissa';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RaissaApp />
  </StrictMode>,
)
