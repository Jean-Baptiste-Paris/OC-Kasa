import { Link } from "react-router-dom"
import logo from "../../assets/LOGO-white.svg"
import "./styles.scss"

function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <img className="footer__logo" src={logo} alt="logo Kasa" />
      </Link>
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
