import { Link, useLocation } from "react-router-dom"
import logo from "../../assets/images/LOGO.svg"
import "./styles.scss"

function Header() {
  const location = useLocation()
  const isCurrentPage = (path) => location.pathname === path
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo Kasa" />
      </Link>
      <nav className="nav">
        <Link
          className={`nav__link ${
            isCurrentPage("/") ? "nav__link--currentpage" : ""
          }`}
          to="/"
        >
          Accueil
        </Link>
        <Link
          className={`nav__link ${
            isCurrentPage("/about") ? "nav__link--currentpage" : ""
          }`}
          to="/about"
        >
          A Propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
