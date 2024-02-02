function Thumbnail({ id, title, cover }) {
  const thumbStyle = cover && {
    backgroundImage: `url(${cover})`,
  }
  return (
    <a className="gallery-item" style={thumbStyle} href={`/logement/${id}`}>
      <p className="gallery-item__text">{title}</p>
    </a>
  )
}

export default Thumbnail
