import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </div>
    </header>
  )
}

export default Header
