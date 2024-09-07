import { NavLink } from "react-router-dom";
import "../styles/header.scss"
import banniere from "../images/banniere.png"

function Header() {
    return (
        <div class="menu" >
        <div class="nav">
            <img src={banniere} alt="banniere" />
            <div class="nav_bar">
                <NavLink to="./">ACCUEIL</NavLink>
                <NavLink to="./Propos">A PROPOS</NavLink>
                <NavLink to="./Prestations">PRÉSTATIONS</NavLink>
                <NavLink to="./Inspirations">INSPIRATIONS</NavLink>
                <NavLink to="./Contact">CONTACT</NavLink>
            </div>
        </div>
        </div>
    )
}

export default Header