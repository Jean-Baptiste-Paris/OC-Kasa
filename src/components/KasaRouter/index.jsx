import { Routes, Route } from 'react-router-dom'
import About from '../../pages/About'
import FicheLogement from '../../pages/FicheLogement'
import Error404 from '../../pages/404'
import Home from '../../pages/Home'

function KasaRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/fiche/:logementID" element={<FicheLogement />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default KasaRouter
