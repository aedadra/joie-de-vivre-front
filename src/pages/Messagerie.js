import { useEffect, useState } from 'react';

function Message() {

   // creation et gestion de modal //

let modal = null

// ouverture de la modal //

const ouvrirModal = function (e) {
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute('href'))
    target.style.display = null
    target.setAttribute("aria-hidden", "false")
    target.setAttribute("aria-modal", "true")
    modal = target
    modal.addEventListener("click", closeModal)
    modal.querySelector(".js-modal-close").addEventListener("click", closeModal)
    modal.querySelector(".js-modal-stop").addEventListener("click", stopPropagation)
};

// fermeture de la modal //

const closeModal = function (e) {
    e.preventDefault()
    if (modal === null) return
    modal.style.display = "none"
    modal.setAttribute("aria-hidden", "true")
    modal.setAttribute("aria-modal", "false")
    modal.removeEventListener("click", closeModal)
    modal.querySelector(".js-modal-close").removeEventListener("click", closeModal)
    modal.querySelector(".js-modal-stop").removeEventListener("click", stopPropagation)
    modal = null
}

const stopPropagation = function (e) {
    e.stopPropagation()
};


document.querySelectorAll(".js-modal").forEach(a => {
    a.addEventListener("click", ouvrirModal)
});
   
    const [message, setMessage] = useState([])
 
    const mail = document.getElementById("mail")

    const postMail = useEffect(() => {
        fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(mail)
    })
    })
    
  
    useEffect(() => {
      fetch("")
  
      .then((response) => response.json())
      .then((data) => {
        setMessage(data)
      })
      .catch((error) => console.log(error))
    })
  
    return (
        <div>
            {message.map((message, id) =>
                <div key={id}>
                    <p>{message}</p>
                </div>
            )}
            <p>Donnez moi votre avis !</p>
            <a href="#modal1" class="js-modal"><button>Ecrire un avis</button></a>
            <aside id="modal1" class="modal" aria-hidden="true" role="dialog" aria-modal="false" style={{display:"none"}}>
                <div class="wrapper js-modal-stop">
                        <span class="js-modal-close">X</span>
                        <form action="#" method="post" enctype="multipart/form-data">
                        <textarea name="message" id="mail" cols="30" rows="10"></textarea>
                        <input type="file" id="file" name="file" multiple />
			            <input onClick={postMail} type="submit" value="Envoyer"/>
                        </form>
                </div>
            </aside>
        </div>
    )
    
}            

export default Message