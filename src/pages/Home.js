import { NavLink } from "react-router-dom";
import picture1 from "../images/inspiration/PhotosFichier_36.png"
import picture2 from "../images/inspiration/PhotosFichier_37.png"
import picture3 from "../images/inspiration/PhotosFichier_38.png"
import picture4 from "../images/inspiration/PhotosFichier_39.png"
import Carrousel from "../components/carrousel";


function Home () {


    return (
        <div>
        <div>
            <h1>"Ensemble, donnons vie à nos espaces"</h1>
            <Carrousel />


                    
        </div>
        <div>
        À la recherche d'un architecte d'intérieur à Quimper ? 

Joie de vivre est votre spécialiste de l'aménagement intérieur. Notre objectif est de concevoir des espaces uniques qui correspondent à votre style de vie. Que vous souhaitiez rénover complètement votre intérieur ou créer un nouvel aménagement, nous vous offrons une expertise créative et éco-responsable.
 
Nous accordons une grande importance à l’établissement d’une relation de confiance solide. Nos solutions d’aménagement sur mesure reflètent vos besoins, vos envies et vos goûts en faisant attention à chaque détail.

Spécialisés en architecture d’intérieur, nous vous proposons plusieurs services, allant d’un simple rendez-vous conseil à la rénovation complète de votre intérieur. Faites confiance à Joie de vivre pour sublimer votre intérieur dans le Finistère.

« Essemble, donnons vie à vos espaces ! » 
        </div>
        <div>
            <h2>CE QUI M'INSPIRE...</h2>
            <img src={picture1} alt=" "/>
            <img src={picture2} alt=" "/>
            <img src={picture3} alt=" "/>
            <img src={picture4} alt=" "/>
            <NavLink to="/Inspirations">
            <button>
                Plus d'inspirations...
            </button>
            </NavLink>
        </div>
        </div>
    )
}

export default Home