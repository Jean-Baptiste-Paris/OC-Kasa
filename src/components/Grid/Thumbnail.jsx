function Thumbnail({ title, cover }) {
  const thumbStyle = cover && {
    backgroundImage: `url(${cover})`,
  }
  return (
    <div className="gallery-item" style={thumbStyle}>
      <p className="gallery-item__text">{title}</p>
    </div>
  )
}

export default Thumbnail
