import { Link } from "react-router-dom";

function Card({id, image, title, promoImage, price }) {
	return (
		<article>
			<p>{title}</p>
			<img src={promoImage} alt=' ' />
			<img src={image} alt=" " />
			<p>L'ETUDE DU PROJET</p>
			{price}
			<Link to={`./PrestationId/${id}`}>
				<button>En savoir plus</button>
			</Link>
		</article>
	);
}

export default Card