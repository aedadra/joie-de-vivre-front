import { useState, useEffect } from "react";
import vectorLeft from "../images/vectorLeft.png"
import vectorRight from "../images/vectorRight.png"
import Lancement from "./lancement";

function Carrousel() {

	const [lancement, setLancement] = useState([])
	const [image, setImage] = useState(0)
	
    useEffect(() => {
        fetch("/lancement.json")

            .then((response) => response.json())
            .then((data) => {
                setLancement(data)
            })
            .catch((error) => console.log(error))
    },[])

	const boucle = lancement.length
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
				<div>
					{lancement.map((lancement, index) =>
						<div key={index}>
							{index === image && (
								<Lancement image={lancement.image} text={lancement.text} ornement1={lancement.ornement1} title={lancement.title} description={lancement.description} description2={lancement.description2} description3={lancement.description3} promotion={lancement.promotion} ornement2={lancement.ornement2} />
							)}
						</div>
					)}
				</div>
			</div>
		</figcaption>
	);
}

export default Carrousel