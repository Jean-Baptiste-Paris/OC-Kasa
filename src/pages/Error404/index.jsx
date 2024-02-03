import { Link } from "react-router-dom"

function Error404() {
  return (
    <div className="Error404 page">
      <p className="Error404__404">404</p>
      <h1 className="Error404__title">
        Oups! La page que vous demandez n'existe pas.
      </h1>
      <Link className="Error404__link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error404
