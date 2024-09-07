import { useState } from "react";
import tache from "../images/ornement/tâcheFichier_53.png";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/prestationId.scss"
import tache2 from "../images/ornement/tâcheFichier_54.png"

function PrestationId() {

	const params = useParams();
	const [PrestaId, setPrestaId] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		fetch("/card.json")
			.then((response) => response.json())
			.then((data) => {
				const chosen = data.find(({ id }) => id === params.id)
				console.log(data)
				setPrestaId(chosen)
				if (chosen === undefined) {
					fetch("/card-2.json")
						.then((response) => response.json())
						.then((data) => {
							const chosen = data.find(({ id }) => id === params.id)
							console.log(data)
							setPrestaId(chosen)
							if (chosen === undefined) {
								fetch("/card-pro.json")
									.then((response) => response.json())
									.then((data) => {
										const chosen = data.find(({ id }) => id === params.id)
										console.log(data)
										setPrestaId(chosen)
										if (chosen === undefined) {
											fetch("/card-pro-2.json")
												.then((response) => response.json())
												.then((data) => {
													const chosen = data.find(({ id }) => id === params.id)
													console.log(data)
													setPrestaId(chosen)
												})
										}
									})
							}
						})
				}  
			})
			.catch((error) => console.log(error))
	}, [params, navigate])

	return (
		<div className="presta-page" key={params.id}  >
			{PrestaId &&
				<div>
					<div class="prestation_tache-container">
						<img src={tache} alt='tache avec une fleur' class="prestation_tache" />
					</div>
					<div className="presta_text">
						<h1 className="presta_title">{PrestaId.title}</h1>
					</div>
					<div class="presta_img">
						<img src={PrestaId.image} alt="cover de la prestation" />
					</div>
					<div class="prestation_option-align">
						<div class="prestation_tache2-container">
							<img src={tache2} alt="tache avec une fleur" class="prestation_tache2" />
						</div>
						<div class="presta_price">
							<p class="presta_description">Prix : {PrestaId.price}</p>
							<div class="presta_launch">
								<p>Offre de lancement :</p>
								<img class="presta_promo" src={PrestaId.promoImage} alt="promo" />
							</div>
						</div>
					</div>
				</div>
			}
		</div>
	)
}   

export default PrestationId