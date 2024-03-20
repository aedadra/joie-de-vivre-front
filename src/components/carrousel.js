import { useState } from "react";
import vectorLeft from "../images/carrousel_home/vectorLeft.png"
import vectorRight from "../images/carrousel_home/vectorRight.png"

function Carrousel({  }) {
	const [image, setImage] = useState(0)
	const boucle = image.length
	const nextImage = () => {
		setImage(image === boucle - 1 ? 0 : image + 1)
	};
	const previousImage = () => {
		setImage(image === 0 ? boucle - 1 : image - 1)
	};

	return (
		<figcaption className="carrousel">
			<div>
				<div >
					{boucle > 1 && (
						<img src={vectorLeft} alt="fleche vers la gauche" onClick={previousImage} />
					)}

					{boucle > 1 && (
						<img src={vectorRight} alt="fleche vers la droite" onClick={nextImage} />
					)}
				</div>
			</div>
			
		</figcaption>
	);
}

export default Carrousel