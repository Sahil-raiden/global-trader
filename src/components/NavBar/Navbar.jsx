import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Navbar() {
    let navigate=useNavigate()
  return (
    <div>
        <ul className="nav text-center bg-dark" style={{fontSize:'1.3rem'}}>
            <li className="nav-item my-auto li">
                <NavLink className="nav-link" to="">
                    Home
                </NavLink>
            </li>
            <li className="nav-item my-auto li">
                <NavLink className="nav-link" to="services">
                    Services
                </NavLink>
            </li>
            <li className="nav-item my-auto li">
                <NavLink className="nav-link" to="aboutus">
                    About Us
                </NavLink>
            </li>
            <li className="nav-item my-auto li">
                <NavLink className="nav-link" to="contact">
                    Contact
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
