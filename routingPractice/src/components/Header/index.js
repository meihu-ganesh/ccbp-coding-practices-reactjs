import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className=""
        alt="wave"
      />
      <h1 className="blog-title">My Blog</h1>
      <ul className="nav-menu">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
