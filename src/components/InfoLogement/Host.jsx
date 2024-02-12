function Host({ name }) {
  const [firstName, lastName] = name.split(" ")

  return (
    <div className="host">
      <p className="host__name">
        <span className="host__firstname">{firstName}</span>
        <br />
        <span className="host__lastname">{lastName}</span>
      </p>
      <div className="host__picture"></div>
    </div>
  )
}

export default Host
