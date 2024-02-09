import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import KasaRouter from "./router"
import Footer from "./components/Footer"
import "./styles.scss"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <main>
        <KasaRouter />
      </main>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
