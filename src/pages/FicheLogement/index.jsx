import { Navigate, useParams } from "react-router-dom"
import logements from "../../assets/data/logements.json"
import InfoLogement from "../../components/InfoLogement"

function FicheLogement() {
  const { logementID } = useParams()
  const logement = logements.find((element) => element.id === logementID)

  if (!logement) {
    return <Navigate to="/404" replace={true} />
  }
  return (
    <div className="logement page">
      <InfoLogement logement={logement} />
    </div>
  )
}

export default FicheLogement
