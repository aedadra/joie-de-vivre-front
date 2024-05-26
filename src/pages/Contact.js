import "../styles/contact.scss"
import map from "../images/CarteFichier_40.png"
import tache3 from "../images/ornement/TacheFichier_42.png"
import tache from "../images/ornement/TacheFichier_45.png"
import tache2 from "../images/ornement/TacheFichier_44.png"

function Contact() {

	return (
		<div class="contact">
			<img src={tache3} class="contact_tache3" alt='tache avec une fleur' />
				<h2 class="contact_horaires-title">NOS HORAIRES</h2>
				<div class="contact_horaires">
				<table class="contact_table">
					<tbody>
						<tr class="table_border">
							<th scope="row"> </th>
							<td>Lundi</td>
							<td>Mardi</td>
							<td>Mercredi</td>
							<td>Jeudi</td>
							<td>Vendredi</td>
							<td>Samedi</td>
							<td>Dimanche</td>
						</tr>
						<tr class="table_border">
							<th scope="row">Matin</th>
							<td>7H30 - 12H30</td>
							<td>7H30 - 12H30</td>
							<td>FERME</td>
							<td>7H30 - 12H30</td>
							<td>7H30 - 12H30</td>
							<td>7H30 - 12H30</td>
							<td>FERME</td>
						</tr>
						<tr>
							<th scope="row">Après-midi</th>
							<td>14H - 17H</td>
							<td>FERME</td>
							<td>FERME</td>
							<td>14H - 17H</td>
							<td>14H - 17H</td>
							<td>13H30 - 16H30</td>
							<td>FERME</td>
						</tr>
					</tbody>
				</table>
				
			</div>
			<h2 class="contact_zone-title">ZONE GEOGRAPHIQUE & CONTACT</h2>
			<div class="contact_zone">
				<img src={tache} class="contact_tache" alt="tache avec une fleur" />
				<img src={map} class="contact_map" alt="carte de la zone géographique d'action" />
				<div class="contact_text">
				<h3>Architecte d’intérieur</h3>
				<p>Particuliers & professionnels</p>
				<p>07 67 31 93 29</p>
				<p>joie.de.vivre.design.global@gmail.com</p>
				<p>Déplacement dans tout le Finistère. <br></br>Prise de rendez-vous par téléphone ou sur le site <br></br> internet.</p>
				</div>
			</div>
			<img src={tache2} class="contact_tache2" alt="tache avec une fleur" />
		</div>
	)
}

export default Contact