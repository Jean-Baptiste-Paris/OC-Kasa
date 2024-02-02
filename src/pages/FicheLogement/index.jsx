import { Navigate, useParams } from "react-router-dom"
import logements from "../../assets/data/logements.json"
import { useEffect } from "react"

function FicheLogement() {
  const { logementID } = useParams()
  const logement = logements.find((element) => element.id === logementID)

  useEffect(() => {
    if (!logement) {
      return <Navigate to="/404" replace={true} />
    }
  }, [logement])
  return (
    <div className="Logement page">
      <h1>{logement.title}</h1>
    </div>
  )
}

export default FicheLogement
