import { useParams } from 'react-router-dom'
import logements from '../../data/logements.json'

function FicheLogement() {
  const { logementID } = useParams()
  const logement = logements.find((element) => element.id === logementID)
  return (
    <div>
      <h1>{logement.title}</h1>
    </div>
  )
}

export default FicheLogement
