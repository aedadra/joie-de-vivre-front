import { NavLink } from "react-router-dom"
import { useEffect } from "react"
import "../styles/login.css"

function Login() {

    const connect = document.getElementById("conect")
    const connexion = useEffect(() => {
        fetch("", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(connect)
        })
    })

    return (
        <div class="login">
            <h2>Login</h2>
            <form id="connect" class="login_form">
                <label for="email">E-mail</label>
                <input type="email" id="email" required />
                <label for="password">Mot de Passe</label>
                <input type="password" id="password" required />
                <input type="submit" value="Se connecter" onClick={connexion}></input>
            </form>

            <a href="/"> <p>Mot de passe oublié</p></a>
            <p>Vous n'avez pas encore de compte ?</p>
            <NavLink to="/Creation">Cliquez sur moi !</NavLink>

        </div>
    )
}

export default Login
