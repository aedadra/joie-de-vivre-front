import Card from '../components/card';
import { useEffect, useState } from 'react';
import"../styles/prestation.scss"
import tache2 from "../images/ornement/tâcheFichier_54.png"
import tache from "../images/ornement/tâcheFichier_53.png"
import Card2 from '../components/card-2';
import {NavLink} from 'react-router-dom';

function PrestationsPro() {

    const [prestation, setPrestation] = useState([])
    const [prestation2, setPrestation2] = useState([])

    useEffect(() => {
        fetch("/card-pro.json")

            .then((response) => response.json())
            .then((data) => {
                setPrestation(data)
            })
            .catch((error) => console.log(error))
    })
    
    useEffect(() => {
        fetch("/card-pro-2.json")

            .then((response) => response.json())
            .then((data) => {
                setPrestation2(data)
            })
            .catch((error) => console.log(error))
    })

    return (
        <div class="prestation">
            <div class="prestation_tache-container">
                <img src={tache} alt='tache avec une fleur' class="prestation_tache" />
            </div>
            <h2 class="prestation_title">LES PROFESSIONNELS</h2>
            <div class="prestation_align">
                {prestation.map((prestation, id) =>
                    <div key={id} class="prestation_card">
                        <Card id={prestation.id} image={prestation.image} title={prestation.title} promoImage={prestation.promoImage} price={prestation.price} />
                    </div>
                )}
            </div>
            <div class="prestation_align-margin">
            <div class="prestation_align">
                {prestation2.map((prestation, id) =>
                    <div key={id} class="prestation_card">
                        <Card id={prestation.id} image={prestation.image} title={prestation.title} promoImage={prestation.promoImage} price={prestation.price} style={"margin-left:200px"}/>
                    </div>
                )}
                </div>
            </div>
            <div class="prestation_option-align">
                <div class="prestation_tache2-container">
                    <img src={tache2} alt="tache avec une fleur" class="prestation_tache2" />
                </div>
                <div class="prestation_option">
                    <h2 class="prestation_option-title">QUELQUES OPTIONS...</h2>
                    <ul class="prestation_option-text">
                        <li>Visite 3D de votre projet ................................................................................................... à partir de 300€</li>
                        <br></br>
                        <li>Design de meubles sur-mesure (bureau, bibliothèque,...) ............................................. à partir de 100€</li>
                        <br></br>
                        <li>Shopping liste avec accompagnement dans les achats .................................................... à partir de 250€</li>
                        <br></br>
                        <li>Proposition d’artisans pour la réalisation des travaux ..................................................... 100€</li>
                        <br></br>
                        <li>Suivi de chantier ................................................................................................................. Sur devis</li>
                        <br></br>
                        <li>Suivi de chantier + proposition d’artisans ........................................................................ Sur devis</li>
                    </ul>
                    <div>
                <NavLink to="/Prestations" class="prestation_button">
                    <button class="prestation_Button">
                        Les particuliers
                    </button>
                </NavLink>
            </div>
                </div>
            </div>
            
        </div>
    
    );
}

export default PrestationsPro;