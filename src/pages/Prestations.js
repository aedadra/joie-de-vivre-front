import Card from '../components/card';
import { useEffect, useState } from 'react';
import"../styles/prestation.scss"

function Prestations() {

    const [prestation, setPrestation] = useState([])

    useEffect(() => {
        fetch("/card.json")

            .then((response) => response.json())
            .then((data) => {
                setPrestation(data)
            })
            .catch((error) => console.log(error))
    })

    return (
        <div class="prestation">
            <h2>LES PARTICULIERS</h2>
            <div class="prestation_align">
                {prestation.map((prestation, id) =>
                    <div key={id} class="prestation_card">
                        <Card id={prestation.id} image={prestation.image} title={prestation.title} promoImage={prestation.promoImage} price={prestation.price} />
                    </div>
                )}
            </div>
            <h2>QUELQUES OPTIONS...</h2>
            <ul>
                <li>Visite 3D de votre projet ............................................................................... à partir de 400€</li>
                <li>Design de meubles sur-mesure (bureau, bibliothèque, meuble TV,...) ......... à partir de 150€</li>
                <li>Shopping liste avec accompagnement dans les achats .................................. à partir de 200€</li>
                <li>Proposition d’artisans pour la réalisation des travaux ..................................................... 100€</li>
                <li>Suivi de chantier ....................................................................................................... Sur devis</li>
                <li>Suivi de chantier + proposition d’artisans ............................................................... Sur devis</li>
            </ul>
        </div>
    );
}

export default Prestations;