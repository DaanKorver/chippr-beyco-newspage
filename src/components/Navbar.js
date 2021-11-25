import {NavLink as Link} from 'react-router-dom'
import "@/styles/Navbar.css"
import logo from "@/assets/icons/logo.svg"
import Button from "@/components/Button"
import flag from "@/assets/icons/flag-us.svg"

function Navbar() {
  return <header>
    <nav>
      <div className="hamburger"></div>
      <ul>
        <li className="hover">
          <Link to="/"><img src={logo} alt="Beyco logo" /></Link>
        </li>
        <li className="hover">
          <Link to="/">Home</Link>
        </li>
        <li className="hover">
          <Link to="/">Cofees</Link>
        </li>
        <li className="hover">
          <Link to="/">For whom</Link>
        </li>
        <li className="hover">
          <Link to="/">Contact</Link>
        </li>
        <li className="hover">
          <Link to="/">FAQ</Link>
        </li>
      </ul>
      <div>
        <Button style={['small']}>Login</Button>
        <Button style={['full', 'small']}>Register</Button>
        <div>
          <img src={flag} alt="" />
          <p>English (us)</p>
        </div>
      </div>
    </nav>
  </header>
}

export default Navbar