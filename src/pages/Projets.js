import Card from '../components/card';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Projets() {

    const [projets, setProjets] = useState([])

    useEffect(() => {
        fetch("")

            .then((response) => response.json())
            .then((data) => {
                setProjets(data)
            })
            .catch((error) => console.log(error))
    })

    return (
        <div>
            <div>
                {projets.map((projets, id) =>
                    <div key={id}>
                        <Link to={`./ProjetId/${projets.id}`}>
                            <Card cover={projets.cover} title={projets.title} />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Projets;