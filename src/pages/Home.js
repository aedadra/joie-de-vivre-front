import { NavLink } from "react-router-dom";
import picture1 from "../images/inspiration/PhotosFichier_36.png"
import picture2 from "../images/inspiration/PhotosFichier_37.png"
import picture3 from "../images/inspiration/PhotosFichier_38.png"
import picture4 from "../images/inspiration/PhotosFichier_39.png"
import tache from "../images/ornement/TacheFichier_45.png"
import tache2 from "../images/ornement/TacheFichier_44.png"
import Carrousel from "../components/carrousel";
import "../styles/home.scss"


function Home () {

    return (
        <div class="home">
            <h1 class="home_title">« Ensemble, donnons vie à nos espaces  »</h1>
            <div class="tache">
                <div class="home_tache-container">
                    <img class="home_tache" src={tache} alt="tache violette" />
                </div>
                <div class="home_alignTache">
                    <div class="home_carrousel">
                        <Carrousel />
                    </div>
                    <div class="home_text">
                        <h2>À la recherche d'un architecte d'intérieur à Quimper ? </h2>
                        <p>Joie de vivre est votre spécialiste de <strong>l'aménagement intérieur</strong>. Notre objectif est de concevoir des <strong>espaces uniques</strong> qui correspondent à <u>votre style de vie</u>. Que vous souhaitiez rénover complètement votre intérieur ou créer un nouvel aménagement, nous vous offrons une expertise <strong>créative</strong> et <strong>éco-responsable</strong>.</p>
                        <p>Nous accordons une <strong>grande importance</strong> à l’établissement d’une <u>relation de confiance solide</u>. Nos solutions d’aménagement sur mesure reflètent <strong>vos besoins, vos envies et vos goûts</strong> en faisant attention à chaque détail.</p>
                        <p>Spécialisés en architecture d’intérieur, nous vous proposons plusieurs services, allant d’un simple rendez-vous conseil à la rénovation complète de votre intérieur. Faites confiance à Joie de vivre pour sublimer votre intérieur dans le Finistère.</p>
                        <h3>« Ensemble, donnons vie à vos espaces ! » </h3>
                    </div>
                    <div class="home_button-link">
                        <NavLink to="/Contact">
                            <button class="home_button-contact">
                                Nous contacter
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div class="home_pictures">
                <h2>CE QUI M'INSPIRE...</h2>
                <div class="home_pictures-align">
                    <img class="home_picture1" src={picture1} alt=" " />
                    <div class="home_pictures-column1">
                        <img class="home_picture2" src={picture2} alt=" " />
                        <img class="home_picture3" src={picture3} alt=" " />
                    </div>
                    <div class="home_pictures-column2">
                        <img class="home_picture4" src={picture4} alt=" " />
                        <div class="home_button-container">
                            <NavLink to="/Inspirations">
                                <button class="home_button">
                                    Plus <br></br> 
                                    d'inspirations...
                                </button>
                            </NavLink>
                        </div>                       
                    </div>
                    <img class="home_tache2" src={tache2} alt="ornement avec une fleur" />
                </div>
            </div>
        </div>
    )
}

export default Home