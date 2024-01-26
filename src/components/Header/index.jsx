import { Link } from "react-router-dom"
import logo from "../../assets/LOGO.svg"
import "./styles.scss"

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo Kasa" />
      </Link>
      <nav className="nav">
        <Link className="nav__link" to="/">
          Accueil
        </Link>
        <Link className="nav__link" to="/about">
          A Propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
