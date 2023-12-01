import { useEffect, useState } from 'react';

function Devis() {

    const [devis, setDevis] = useState([])

    useEffect(() => {
        fetch("")

            .then((response) => response.json())
            .then((data) => {
                setDevis(data)
            })
            .catch((error) => console.log(error))
    })

    return (
        <div>
            {devis}
        </div>
    );
}

export default Devis;