import { useEffect, useState } from 'react';
import Modal from '../components/modal';

function Message() {

    const postMail = useEffect(() => {

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

    const [message, setMessage] = useState([])

    const [isOpen, setIsOpen] = useState(false);
    const handleClose = (() => {
        setIsOpen(false);
    });

    const handleClick = (() => {
        setIsOpen(true);
    });


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
            {message}
            <button onClick={handleClick}>Envoyer un message</button>
            <Modal
                isOpen={isOpen}
                handleClose={handleClose}
            >
                <form action="#" method="post" >
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    <input type='file' />
                    <input type="submit" value="Envoyer" onClick={postMail} />
                </form>
            </Modal>
        </div>
    )
}

export default Message