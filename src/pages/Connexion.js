function Login () {
    
    
    
    return (
        <div>
            <h2>Login</h2>
<form id="connexion">
    <label for="email">E-mail</label>
    <input type="email" id="email" />
    <label for="password">Mot de Passe</label>
    <input type="password" id="password" />
    <button id="submit">Se connecter</button>
</form>

<a href="/"> <p>Mot de passe oublié</p></a>
<p>Vous n'avez pas encore de compte ?</p>
<a href="/"><p>Cliquez sur moi !</p></a>

        </div>
    )
} 

export default Login
