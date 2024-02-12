import { Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Logement from "./pages/Logement"
import Error404 from "./pages/Error404"
import Home from "./pages/Home"

function KasaRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="/404" element={<Error404 />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default KasaRouter
