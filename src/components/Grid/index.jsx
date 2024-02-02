import Thumbnail from "./Thumbnail"
import "./styles.scss"

function Grid({ logements }) {
  return (
    <div className="grid">
      {logements.map(({ id, title, cover }) => (
        <Thumbnail key={id} id={id} title={title} cover={cover} />
      ))}
    </div>
  )
}

export default Grid
