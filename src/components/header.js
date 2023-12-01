import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div>
            <NavLink to="./Home">Accueil</NavLink>
            <NavLink to="./Avis">Avis</NavLink>
            <NavLink to="./Contact">Contact</NavLink>
            <NavLink to="./Prestations">Mes préstations</NavLink>
            <NavLink to="./Projets">Mes projets</NavLink>
            <NavLink to="./Propos">A propos</NavLink>
            <NavLink to="./Connexion">Espace Client</NavLink>
        </div>
    )
}

export default Header