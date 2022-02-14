import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import Logo from '../../components/Logo/Logo'
import './NavBar.css'

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }

  return (
    <nav className="Nav">
      <Link to="/" className="Link"><Logo className="miniLogo" /></Link>
      {/* &nbsp;&nbsp;<Link to="/orders">Order History</Link> */}
      <div>
        <span>Not {user.name}? </span>
        <Link to="" onClick={handleLogOut} className="Link" id="Logout">Log Out</Link>
      </div>
    </nav>
  )
}