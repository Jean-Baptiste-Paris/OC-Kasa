function Thumbnail({ id, title, cover }) {
  const thumbStyle = cover && {
    backgroundImage: `url(${cover})`,
  }
  return (
    <a className="thumbnail" style={thumbStyle} href={`/logement/${id}`}>
      <p className="thumbnail__text">{title}</p>
    </a>
  )
}

export default Thumbnail
