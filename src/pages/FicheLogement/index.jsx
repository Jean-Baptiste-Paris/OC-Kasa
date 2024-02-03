import { Navigate, useParams } from "react-router-dom"
import logements from "../../assets/data/logements.json"

function FicheLogement() {
  const { logementID } = useParams()
  const logement = logements.find((element) => element.id === logementID)

  if (!logement) {
    return <Navigate to="/404" replace={true} />
  }
  return (
    <div className="Logement page">
      <h1>{logement.title}</h1>
    </div>
  )
}

export default FicheLogement
