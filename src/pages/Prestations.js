import Card from '../components/card';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Prestations() {

    const [prestation, setPrestation] = useState([])

    useEffect(() => {
        fetch("")

            .then((response) => response.json())
            .then((data) => {
                setPrestation(data)
            })
            .catch((error) => console.log(error))
    })

    return (
        <div>
            <div>
                {prestation.map((prestation, id) =>
                    <div key={id}>
                        <Link to={`./PrestationId/${prestation.id}`}>
                            <Card cover={prestation.cover} title={prestation.title} />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Prestations;