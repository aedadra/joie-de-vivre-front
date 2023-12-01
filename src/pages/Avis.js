import { useEffect, useState } from 'react';
import Modal from '../components/modal';


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

    const postAvis = useEffect((event) => {

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
        <div>
            {avis.map((avis, id) =>
                <div key={id}>
                    <p>{avis}</p>
                </div>
            )}

            <Modal
                isOpen={isOpen}
                handleClose={handleClose}
            >
                <form action="#" method="post" >
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    <input type="submit" value="Envoyer" onClick={postAvis} />
                </form>
            </Modal>
            <p>Donnez moi votre avis !</p>
            <button onClick={handleClick}>Ecrire un avis</button>
        </div>
    )

}

export default Avis
             