import { Link, NavLink } from "react-router-dom";
import "../styles/lancement.scss"

function Lancement ({image, text, ornement1, title, description, description2, description3, promotion, ornement2, link, element}) {
    

    return (
        <article class="lancement">
            <div class="lancement_img">
                <img src={image} alt=" " />
                <p>{text}</p>
            </div>
            <div class="lancement_align">
                <div class="lancement_title">
                    <img src={ornement1} alt="ornement de texte" />
                    <h2>{title}</h2>
                </div>
                <div class="lancement_promotion">
                    <div class="lancement_description">
                        <p>{description}</p>
                        <p>{description2}</p>
                        <p>{description3}</p>
                    </div>
                    <img src={promotion} alt="promption en cours" />
                </div>
                <button class="lancement_button">
                    <NavLink to={link} element={element}>
                    En savoir plus...
                    </NavLink>
                    </button>
            </div>
            <img src={ornement2} class="lancement_ornement" alt="ornement de texte" />
        </article>
    );

}

export default Lancement