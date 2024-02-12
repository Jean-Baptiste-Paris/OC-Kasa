import Collapse from "../Collapse"
import Host from "./Host"
import Rating from "./Rating"
import Tag from "./Tag"
import "./styles.scss"

function InfoLogement({
  title,
  location,
  tags,
  host,
  rating,
  description,
  equipments,
}) {
  return (
    <div className="info-logement">
      <div>
        <h1 className="info-logement__title">
          {title ? title : "Fiche logement"}
        </h1>
        {location && <p className="info-logement__location">{location}</p>}
        <div className="info-logement__tags">
          {tags.map((tag, index) => (
            <Tag key={`${tag}-${index}`} name={tag} />
          ))}
        </div>
      </div>
      <div>
        <Host name={host.name} />
        <Rating rating={rating} />
      </div>
      <Collapse title="Description">
        {description ? description : "Pas de description disponible"}
      </Collapse>
      <Collapse title="Équipements">
        <ul>
          {equipments
            ? equipments.map((equipement, index) => (
                <li key={`${index}+${equipement}`}>{equipement}</li>
              ))
            : "Pas d'information sur les équipements disponibles"}
        </ul>
      </Collapse>
    </div>
  )
}

export default InfoLogement
