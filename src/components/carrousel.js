import { useState } from "react";

function Carrousel({ carrousel }) {
	const [image, setImage] = useState(0)
	const boucle = carrousel.length
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
						<img src={""} alt="fleche vers la gauche" onClick={previousImage} />
					)}

					{boucle > 1 && (
						<img src={""} alt="fleche vers la droite" onClick={nextImage} />
					)}
				</div>
			</div>
			{carrousel.map((carrousel, index) => {
				return (
					<div key={index}>
						<div className="carrousel__image" >
							{index === image && (
								<img src={carrousel} alt="img-project" />
							)}
						</div>
						<div className="carrousel__index">
							{index === image && boucle > 1 && (
								<span>
									{image + 1}/{boucle}
								</span>
							)}
						</div>
					</div>
				);
			})}
		</figcaption>
	);
}

export default Carrousel