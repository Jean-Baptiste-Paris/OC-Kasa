import { useParams } from 'react-router-dom'

function FicheLogement() {
  const { logementID } = useParams()
  return (
    <div>
      <h1>Fiche Logement {logementID && `ID: ${logementID}`}</h1>
    </div>
  )
}

export default FicheLogement
