import { Link } from "react-router-dom";
import "../styles/card.scss"

function Card({ id, image, title, promoImage, price }) {
	return (
		<article class="card" key={id}>
			<p class="card_title">{title}</p>
			<div class="card_photos">
				<img src={promoImage} alt='promotion de lancement' class="card_promo" />
				<div class="card_container">
					<img src={image} alt="présentation de ce que vous souhaitez rénover" class="card_cover" />
				</div>
			</div>
			<div class="card_price">
				<p>L'ETUDE DU PROJET</p>
				{price}
			</div>
			<Link to={`/PrestationId/${id}`}>
				<button class="card_button">En savoir plus</button>
			</Link>
		</article>
	);
}

export default Card