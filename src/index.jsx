import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import KasaRouter from './components/KasaRouter'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <KasaRouter />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
