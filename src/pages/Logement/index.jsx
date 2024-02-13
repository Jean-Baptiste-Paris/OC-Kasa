import { Navigate, useParams } from "react-router-dom"
import logements from "../../assets/data/logements.json"
import InfoLogement from "../../components/InfoLogement"
import Collapse from "../../components/Collapse"
import Slideshow from "../../components/Slideshow"

function FicheLogement() {
  const { id } = useParams()
  const logement = logements.find((element) => element.id === id)
  const { description, equipments, pictures } = logement

  if (!logement) {
    return <Navigate to="/404" replace={true} />
  }
  return (
    <div className="Logement page">
      <Slideshow images={pictures} />
      <InfoLogement {...logement} className="Logement__infos" />
      <div className="Logement__collapses">
        <Collapse title="Description">
          {description ? description : "Pas de description disponible"}
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {equipments
              ? equipments.map((equipment, index) => (
                  <li key={`${index}+${equipment}`}>{equipment}</li>
                ))
              : "Pas d'information sur les équipements disponibles"}
          </ul>
        </Collapse>
      </div>
    </div>
  )
}

export default FicheLogement
