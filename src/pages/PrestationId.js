import { useState } from "react";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import tache from "../images/ornement/TacheFichier_45.png"

function PrestationId() {

	const params = useParams();
	const [PrestaId, setPrestaId] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		fetch("/card.json")
			.then((response) => response.json())
			.then((data) => {
				const chosen = data.find(({ id }) => id == params.id)
				console.log(data)
				setPrestaId(chosen)
				if (chosen === undefined) {
					fetch("/card-2.json")
					.then((response) => response.json())
					.then((data) => {
						const chosen = data.find(({ id }) => id == params.id)
						console.log(data)
						setPrestaId(chosen)})
				}
			})
			.catch((error) => console.log(error))
	}, [params, navigate])

	
	

    return (
        <div className="presta-page" key={params.id} >
            {PrestaId &&
                <div>
                    <div className="logement-page__text">
                        <h1 className="logement-page__title">{PrestaId.title}</h1>
                    </div>
					
				<div>
					<img class="presta_img" src={PrestaId.image} alt="cover de la prestation"/>
					</div>
					
						<p class="presta_description">{PrestaId.price}</p>
						<img class="presta_promo" src={PrestaId.promoImage} alt="promo" />
                </div>
            }
        </div>        
    )
}   

export default PrestationId