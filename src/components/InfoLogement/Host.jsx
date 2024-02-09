function Host({ name }) {
  return (
    <div className="host">
      <p className="host__name">{name}</p>
      <div className="host__picture"></div>
    </div>
  )
}

export default Host
