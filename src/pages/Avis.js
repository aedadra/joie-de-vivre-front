import { useEffect, useState } from 'react';
import Modal from '../components/modal';
import "../styles/avis.css"


function Avis() {

    const [isOpen, setIsOpen] = useState(false);
    const handleClose = (() => {
        setIsOpen(false);
    });

    const handleClick = (() => {
        setIsOpen(true);
    });

    const [avis, setAvis] = useState([])

    const message = document.getElementById("#message")

    const postAvis = useEffect(() => {

        fetch("", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(message)
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => console.log(error))
    })


    useEffect(() => {
        fetch("")

            .then((response) => response.json())
            .then((data) => {
                setAvis(data)
            })
            .catch((error) => console.log(error))
    })

    return (

        <div class="avis">
            <div class="avis_post">
                <Modal
                    isOpen={isOpen}
                    handleClose={handleClose}
                >
                    <form action="#" method="post" class="avis_form">
                        <label for="name">votre nom</label>
                        <input type='text' value=""/>
                        <label for="firstName">votre prénom</label>
                        <input type='text' value=""/>
                        <label for="avis">votre avis</label>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                        <input type="submit" value="Envoyer" onClick={postAvis} />
                    </form>
                </Modal>
                <p>Donnez moi votre avis !</p>
                <button onClick={handleClick}>Ecrire un avis</button>
            </div>
            <div class="avis_get">
                <p>D'autres l'ont déjà fait !</p>
                {avis.map((avis, id) =>
                    <div key={id}>
                        <p>{avis}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Avis
             