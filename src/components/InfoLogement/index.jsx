import Host from "./Host"
import Rating from "./Rating"
import Tag from "./Tag"
import "./styles.scss"

function InfoLogement({ title, location, tags, host, rating, className }) {
  return (
    <div className={`info-logement ${className}`}>
      <div className="info-logement__block block1">
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
      <div className="info-logement__block block2">
        <Host name={host.name} />
        <Rating rating={rating} />
      </div>
    </div>
  )
}

export default InfoLogement
