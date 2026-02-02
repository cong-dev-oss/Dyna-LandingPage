import React from 'react'
import ReactDOM from 'react-dom/client'
import DYNALANDINGPAGE from './pages/DYNALANDINGPAGE.tsx'
import { initCSSAssets } from './utils/cssAssets'
import './global.css'
import './global-styles.css'

// Initialize CSS asset variables with proper base URLs
initCSSAssets();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DYNALANDINGPAGE />
  </React.StrictMode>,
)
