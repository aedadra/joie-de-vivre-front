import { useEffect } from "react"
import "../styles/signUp.scss"

function SignUp() {

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
        <div class="signUp">
            <form id="connect" class="signUp_form">
                <label for="email">Choisissez votre E-mail</label>
                <input type="email" id="email" required />
                <label for="password">Choisissez votre Mot de Passe</label>
                <input type="password" id="password" required />
                <input type="submit" value="Valider" onClick={connexion} />
            </form>
        </div>
    )
}

export default SignUp