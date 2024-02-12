import { Navigate, useParams } from "react-router-dom"
import logements from "../../assets/data/logements.json"
import InfoLogement from "../../components/InfoLogement"
import Collapse from "../../components/Collapse"
import "./styles.scss"

function FicheLogement() {
  const { id } = useParams()
  const logement = logements.find((element) => element.id === id)

  if (!logement) {
    return <Navigate to="/404" replace={true} />
  }
  return (
    <div className="logement page">
      <InfoLogement {...logement} className="logement__row" />
      <div className="logement__row">
        <Collapse title="Description">
          {logement.description
            ? logement.description
            : "Pas de description disponible"}
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments
              ? logement.equipments.map((equipement, index) => (
                  <li key={`${index}+${equipement}`}>{equipement}</li>
                ))
              : "Pas d'information sur les équipements disponibles"}
          </ul>
        </Collapse>
      </div>
    </div>
  )
}

export default FicheLogement
