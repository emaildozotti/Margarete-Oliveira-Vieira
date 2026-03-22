import React from 'react'
import ReactDOM from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.jsx'
import './index.css'

AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 50,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
